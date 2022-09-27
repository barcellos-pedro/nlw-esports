import {
  Modal,
  ModalProps,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { style } from './styles';
import { THEME } from '../../theme';

interface GameModalProps extends ModalProps {
  title: string;
  description: string;
  buttonDescription: string;
  onClose: () => void;
}

export function GameModal({
  title,
  description,
  buttonDescription,
  onClose,
  ...modalProps
}: GameModalProps) {
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
            <Text style={style.title}>{title}</Text>
            <Text style={style.description}>{description}</Text>
          </View>

          <View style={style.modalFooter}>
            <Text style={style.buttonDescription}>{buttonDescription}</Text>
            <TouchableOpacity style={style.button}>
              <Text style={style.buttonText}>Discord#1234</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
