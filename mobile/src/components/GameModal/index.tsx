import {
  Alert,
  Modal,
  ModalProps,
  Platform,
  Pressable,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { style } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { Loading } from '../Loading';

interface GameModalProps extends ModalProps {
  title: string;
  description: string;
  buttonDescription: string;
  discordUser: string;
  onClose: () => void;
}

export function GameModal({
  title,
  description,
  buttonDescription,
  onClose,
  discordUser,
  ...modalProps
}: GameModalProps) {
  const onCopyDiscord = async () => {
    await Clipboard.setStringAsync(discordUser);

    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        `${discordUser} copied to clipboard`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    } else {
      Alert.alert(
        'Discord copied to clipboard',
        'Paste in Discord to start gaming!'
      );
    }
  };

  return (
    <Modal {...modalProps} onRequestClose={onClose}>
      {/* Background Overlay */}
      <View style={style.overlayContainer}>
        {/* Content */}
        <View style={style.contentContainer}>
          <Pressable onPress={onClose} style={style.closeButton}>
            <AntDesign
              name="close"
              size={24}
              color={THEME.COLORS.CAPTION_500}
            />
          </Pressable>

          <View style={style.modalBody}>
            <FontAwesome5
              name="discord"
              color={THEME.COLORS.SUCCESS}
              size={64}
            />
            <Heading
              style={style.modalContent}
              title={title}
              subtitle={description}
            />
          </View>

          <View style={style.modalFooter}>
            <Text style={style.buttonDescription}>{buttonDescription}</Text>
            <TouchableOpacity
              style={style.button}
              onPress={onCopyDiscord}
              disabled={!discordUser}
            >
              <Text style={style.buttonText}>
                {discordUser ? discordUser : <Loading />}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
