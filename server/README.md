# Back-end

## Entities

### Game

- id
- title
- bannerUrl

### Ads

- id
- gameId
- name
- yearsPlaying
- discord
- weekDays
- hourStart
- hourEnd
- useVoiceChannel
- createdAt (updatedAt?)

## Use cases (Routes)

- List games with ads count
- Create new ad
- List ads by game
- Find Discord username by Ad ID

# Read more...

## HTTP methods | API RESTful | HTTP Codes
> GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS

### Status codes
- Informational responses (100–199)
- Successful responses (200–299)
- Redirection messages (300–399)
- Client error responses (400–499)
- Server error responses (500–599)

### Params
- Query (?search=videos&from=today)
- Route (/user/your-name)
- Body ({ name: 'foo', email>: 'foo@gmail.com' })
