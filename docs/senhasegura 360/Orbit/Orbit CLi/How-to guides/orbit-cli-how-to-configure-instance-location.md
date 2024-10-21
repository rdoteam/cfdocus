# How to configure instance location 

In this document, you’ll find the steps on how to configure the location of senhasegura.

## View command options
You can define localization settings, server time zone, and internal browser language using the  command.
:::(Error) (Important)
Changes in web interface language and proxy system languages are made through user preferences and dedicated proxy system commands.
:::
:::(Warning) (Attention)
Restart the server after executing the command to apply the new language to the database system.
:::
`
mt4adm@vmdf-giskard:~$ sudo orbit locale --help
Usage: orbit locale

Language and locale settings

Flags:
 -h, --help Show context-sensitive help.
 --force Force the command execution, never prompt

lcle
 --timezone=STRING Timezone string
 -l, --browser-locale=STRING Specifies the browser locale for http sessions.

act
 --show
List current configuration
Use the --show argument.

mt4adm@vmdf-giskard:~$ sudo orbit locale --show
Timezone
Timezone is 'America/Sao_Paulo'
` 
## Configure internal browser language

1. Use the  argument.

`
mt4adm@vmdf-giskard:~$ sudo orbit locale --browser-locale en-gb
mt4adm@vmdf-giskard:~$
`
Refer to the following table with valid language codes for this configuration:

| Code | Language            | Code | Language              | Code | Language               |
|--------|-------------------|--------|---------------------|--------|----------------------|
|   | Acoli             |    | Afrikaans           |   | All packages for Firefox ESR (meta) |
|    | Aragonese         |    | Arabic              |   | Asturian              |
|    | Azerbaijani       |    | Belarusian          |    | Bulgarian             |
|    | Bengali           |    | Breton              |    | Bosnian               |
|    | Catalan           |  | Catalan (Valencia) |  | Kaqchikel             |
|    | Czech             |    | Welsh               |    | Danish                |
|    | German            |   | Lower Sorbian       | | English (Canada)      |
| | English (United Kingdom) |  | Esperanto     | | Spanish (Argentina)   |
| | Spanish (Chile)   | | Spanish (Spain)     | | Spanish (Mexico)      |
|    | Estonian          |    | Basque              |    | Persian               |
|    | Fulah             |    | Finnish             |    | French                |
| | Western Frisian (Netherlands) |  | Irish (Ireland) |  | Scottish Gaelic       |
|    | Estonian          |    | Galician            |    | Guarani               |
| | Guzerate (India)  |    | Hebrew              | | Hindi (India)         |
|    | Croatian          |   | Upper Sorbian       |    | Hungarian             |
| | Armenian (Armenia)|    | Interlingua         |    | Indonesian            |
|    | Icelandic         |    | Italian             |    | Japanese              |
|    | Georgian          |   | Kabyle              |    | Kazakh                |
|    | Central Khmer     |    | Kannada             |    | Korean                |
|   | Ligurian          |    | Lithuanian          |    | Latvian               |
|    | Macedonian        |    | Marathi             |    | Malay                 |
|    | Burmese           | | Norwegian Bokmål (Norway) |  | Nepali (Nepal)  |
|    | Dutch             | | Norwegian Nynorsk (Norway) |  | Occitan           |
| | Panjabi (India)   |    | Polish              | | Portuguese (Brazil)   |
| | Portuguese (Portugal) |  | Romansh            |    | Romanian              |
|    | Russian           |    | Sinhala             |    | Slovak                |
|    | Slovenian         |   | Songhais            |    | Albanian              |
|    | Serbian           | | Swedish (Sweden)    |    | Tamil                 |
|    | Telugu            |    | Thai                |    | Tagalog               |
|    | Turkish           |   | Chicahuaxtla Triqui |    | Ukrainian             |
|    | Urdu              |    | Uzbek               |    | Vietnamese            |
|    | Xhosa             | | Chinese (China)     | | Chinese (Taiwan)      |
|    | Modern Greek      |   | Brahmic             |        | Devanagari            |
|        |                   |        | Devanagari Extended|        | Vedic Extensions      |
|        |                   |        | Latin Extended-A    |        | Latin Extended-B      |

## Configure a new location
To configure a new location, you must first know the possibilities. Available locations are in the  directory.
`
mt4adm@vmdf-giskard:~$ sudo orbit locale --timezone=Europe/Paris
Are you sure you want to proceed: y
Done!
No errors reported

Restarting the database service. Please wait...
Are you sure you want to proceed: y
Done!
No errors reported
`