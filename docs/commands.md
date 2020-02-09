# Commands  
Here's the list of Atlanta commands. This one contains more than **120 commands** in **8 categories**!  

#### Contents of the table  
**Name**: The name of the command  
**Description**: A brief explanation of the purpose of the command  
**Usage**: The arguments/options that the command takes in parameters  
**Cooldown**: The time that must elapse between each command so that it can be executed again by the user

### General (25 commands)

| Name             | Description                                                                             | Usage                          | Cooldown  |
| ---------------- | --------------------------------------------------------------------------------------- | ------------------------------ | --------- |
| **api-token**    | Renvoie votre token pour utiliser l'API d'Atlanta !                                     | apitoken (regenerate)          | 1 seconds |
| **avatar**       | Affiche l'avatar du membre mentionné                                                    | avatar (@membre)               | 5 seconds |
| **calc**         | Une calculatrice capable de résoudre des opérations complexes et convertir des unités ! | calc [calcul]                  | 1 seconds |
| **fortnite**     | Affiche les stats Fortnite d'un joueur !                                                | fortnite [psn/xbl/pc] [pseudo] | 1 seconds |
| **fortniteshop** | Affiche la boutique d'objets Fortnite !                                                 | fortniteshop                   | 1 seconds |
| **github**       | Affiche les informations du github d'Bot !                                              | github                         | 5 seconds |
| **hastebin**     | Upload votre texte sur hastebin !                                                       | hastebin [texte]               | 5 seconds |
| **help**         | Affiche l'aide des commandes ou l'aide d'une commande en particulier                    | help (commande)                | 5 seconds |
| **invitations**  | Affiche le nombre de personnes que vous avez invitées sur le serveur !                  | invitations (@membre)          | 3 seconds |
| **minecraft**    | Affiche des informations sur le serveur Minecraft !                                     | minecraft [ip]                 | 3 seconds |
| **partners**     | Affiche les partenaires d'Atlanta                                                       | partners                       | 1 seconds |
| **permissions**  | Affiche les permissions du membre dans le salon                                         | permissions (@membre)          | 1 seconds |
| **ping**         | Affiche la latence du bot                                                               | ping                           | 1 seconds |
| **quote**        | Citez un message dans le salon !                                                        | quote [messageID] [salon]      | 5 seconds |
| **remindme**     | Définissez un rappel !                                                                  | remindme [raison]              | 3 seconds |
| **report**       | Envoyez votre signalement dans le salon défini pour cela !                              | report [@user] [raison]        | 5 seconds |
| **serverinfo**   | Affiche des informations sur le serveur !                                               | serverinfo [ID/Nom]            | 3 seconds |
| **setafk**       | Devenez AFK (les membres qui vous mentionneront recevront un message)                   | setafk [raison]                | 3 seconds |
| **shorturl**     | Raccourci votre lien !                                                                  | shorturl [url]                 | 5 seconds |
| **someone**      | Tire un membre aléatoire sur le serveur !                                               | someone                        | 1 seconds |
| **staff**        | Affiche la liste des membres du staff du serveur !                                      | staff                          | 3 seconds |
| **stats**        | Affiche les stats du bot !                                                              | stats                          | 3 seconds |
| **suggest**      | Envoie votre suggestion dans le salon défini pour ça !                                  | suggest [message]              | 5 seconds |
| **translate**    | Je traduis votre texte !                                                                | translate [langue] [message]   | 8 seconds |
| **userinfo**     | Affiche des informations sur l'utilisateur !                                            | userinfo (@user/userID)        | 5 seconds |

### Images (22 commands)

| Name              | Description                                                      | Usage                       | Cooldown  |
| ----------------- | ---------------------------------------------------------------- | --------------------------- | --------- |
| **bird**          | Affiche une image d'oiseau                                       | bird                        | 5 seconds |
| **captcha**       | Génère une image de type "captcha" grâce à l'API Nekobot         | captcha (@membre)           | 5 seconds |
| **cat**           |                                                                  |                             | 5 seconds |
| **clyde**         | Génère une image de type "clyde" grâce à l'API Nekobot           | clyde [texte]               | 5 seconds |
| **dog**           | Affiche une image de chien :)                                    | dog                         | 5 seconds |
| **duck**          | Affiche une image de canard                                      | duck                        | 5 seconds |
| **facepalm**      |                                                                  |                             | 5 seconds |
| **fire**          | Génère une image de type "fire" grâce à l'API Améthyste          | fire (@membre)              | 5 seconds |
| **fox**           | Affiche une image de renard                                      | fox                         | 5 seconds |
| **hit**           | Donne un coup à l'utilisateur mentionné                          | hit [mention]               | 5 seconds |
| **jail**          | Génère une image de type "jail" grâce à l'API Améthyste          | jail (@membre)              | 5 seconds |
| **kiss**          | Donne un bisou à l'utilisateur mentionné                         | kiss [mention]              | 5 seconds |
| **mission**       | Génère une image de type "mission" grâce à l'API Améthyste       | mission (@membre)           | 5 seconds |
| **phcomment**     | Génère une image de type "phcomment" grâce à l'API Nekobot       | phcomment (@membre) (texte) | 5 seconds |
| **qrcode**        | Génère un QR Code avec votre texte !                             | qrcode [texte]              | 3 seconds |
| **rip**           | Génère une image de type "rip" grâce à l'API Améthyste           | rip (@membre)               | 5 seconds |
| **scary**         | Génère une image de type "scary" grâce à l'API Améthyste         | scary (@membre)             | 5 seconds |
| **tobecontinued** | Génère une image de type "tobecontinued" grâce à l'API Améthyste | tobecontinued (@membre)     | 5 seconds |
| **triggered**     | Génère une image de type "triggered" grâce à l'API Améthyste     | triggered (@membre)         | 5 seconds |
| **tweet**         | Génère un tweet d'une personne de votre choix sur Twitter !      | tweet [@twitter] [texte]    | 5 seconds |
| **wanted**        | Génère une image de type "wanted" grâce à l'API Améthyste        | wanted (@membre)            | 5 seconds |
| **wasted**        | Génère une image de type "wasted" grâce à l'API Améthyste        | wasted (@membre)            | 5 seconds |

### Administration (21 commands)

| Name                | Description                                                            | Usage                           | Cooldown   |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------- | ---------- |
| **addcommand**      | Ajoutez une commande personnalisée au serveur !                        | addcommand [nom] [réponse]      | 3 seconds  |
| **addemote**        | Ajoute un émoji au serveur !                                           | addemote [URL] [nom]            | 5 seconds  |
| **announcement**    | Envoie une annonce dans le salon actuel !                              | announcement [annonce]          | 3 seconds  |
| **automod**         | Active ou désactive la suppression automatique des invitations discord | automod [on/off] (#salon)       | 5 seconds  |
| **autorole**        | Active ou désactive l'autorôle sur le serveur !                        | autorole [on/off] (role)        | 5 seconds  |
| **backup**          | Gérez vos sauvegardes de serveur de manière ergonomique et efficace!   | backup [create/load/infos]      | 30 seconds |
| **configuration**   | Affiche la configuration du serveur                                    | configuration                   | 3 seconds  |
| **delcommand**      | Enlevez une commande personnalisée du serveur !                        | delcommand [nom-de-la-commande] | 3 seconds  |
| **deletemod**       | Active ou désactive l'auto suppression des commandes de modération !   | deletemod [on/off]              | 3 seconds  |
| **goodbye**         | Envoie un message d'au revoir dans un salon défini au préalable !      | goodbye                         | 3 seconds  |
| **ignore**          | Désactive ou active les commandes dans le salon mentionné              | ignore [#salon]                 | 3 seconds  |
| **poll**            | Lance un sondage dans le salon actuel !                                | poll [question]                 | 3 seconds  |
| **purge**           | Expulse les membres inactifs !                                         | purge [jours]                   | 5 seconds  |
| **setfortniteshop** | Définissez le salon de la boutique Fortnite du jour !                  | setfortniteshop (#salon)        | 5 seconds  |
| **setlang**         | Change la langue du serveur!                                           | setlang [french/english]        | 3 seconds  |
| **setmodlogs**      | Définissez le salon des logs de modération !                           | setmodlogs (#salon)             | 3 seconds  |
| **setprefix**       | Change le préfixe du serveur                                           | setprefix [préfixe]             | 3 seconds  |
| **setreports**      | Définissez un salon de signalements!                                   | setreports (#salon)             | 3 seconds  |
| **setsuggests**     | Définissez le salon des suggestions !                                  | setsuggests (#salon)            | 3 seconds  |
| **slowmode**        | Définissez un cooldown dans un salon                                   | slowmode [#salon] (temps)       | 3 seconds  |
| **welcome**         | Envoie un message de bienvenue dans un salon défini au préalable !     | welcome                         | 3 seconds  |

### Economy (15 commands)

| Name             | Description                                                                                      | Usage                            | Cooldown   |
| ---------------- | ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| **achievements** | Affiche la liste de toutes les réalisations !                                                    | achievements                     | 1 seconds  |
| **birthdate**    | Définissez la date de votre anniversaire (qui apparaitre sur votre profil)                       | birthdate (date)                 | 1 seconds  |
| **deposit**      | Déposez votre argent à la banque                                                                 | deposit [montant]                | 1 seconds  |
| **divorce**      | Divorcez avec la personne avec qui vous êtes actuellement marié(e) !                             | divorce                          | 3 seconds  |
| **leaderboard**  | Affiche les utilisateurs qui dispose du plus de crédits, de niveaux ou de points de réputation ! | leaderboard [rep/levels/credits] | 5 seconds  |
| **money**        | Affiche vos crédits                                                                              | money (@membre)                  | 1 seconds  |
| **pay**          | Payez un membre avec des crédits !                                                               | pay [@user#0000] [montant]       | 10 seconds |
| **profile**      | Affiche le profil de l'utilisateur mentionné (ou de l'auteur du message)                         | profile (@user#0000)             | 3 seconds  |
| **rep**          | Donnez un point de réputation à un membre !                                                      | rep [@user#0000]                 | 3 seconds  |
| **rob**          | Essayez de piller un membre !                                                                    | rob [@membre] [crédits]          | 1 seconds  |
| **setbio**       |                                                                                                  |                                  | 5 seconds  |
| **slots**        | Un équivalent au Casino !                                                                        | slots [montant]                  | 3 seconds  |
| **wedding**      | Mariez-vous avec la personne de votre choix !                                                    | wedding [@user#0000]             | 10 seconds |
| **withdraw**     | Retirez de l'argent !                                                                            | withdraw [montant]               | 1 seconds  |
| **work**         | Travaillez et gagnez de l'argent !                                                               | work                             | 3 seconds  |

### Moderation (13 commands)

| Name                | Description                                                                                     | Usage                                                                   | Cooldown  |
| ------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| **ban**             | Banni le membre mentionné !                                                                     | ban [@user] (raison)                                                    | 3 seconds |
| **checkinvites**    | Vérifie si les membres n'ont pas une publicité pour leur serveur Discord dans leur présence !   | checkinvites                                                            | 3 seconds |
| **clear**           | Supprime des messages très rapidement !                                                         | clear [nombre-de-messages] (@membre)                                    | 3 seconds |
| **clear-sanctions** | Supprime toutes les sanctions d'un membre !                                                     | clear-sanctions [@membre]                                               | 3 seconds |
| **giveaway**        | Gérez vos giveaways simplement !                                                                | giveaway [create/reroll/delete/end] (temps) (nombre de gagnants) (prix) | 5 seconds |
| **kick**            | Expulse le membre mentionné !                                                                   | kick [@user] (raison)                                                   | 3 seconds |
| **mention-role**    | Mentionne un rôle puis désactive la possibilité de mentionner                                   | mentionrole [nom]                                                       | 3 seconds |
| **mute**            | Empêche le membre d'envoyer des messages et de se connecter en vocal pendant un certain temps ! | mute [@membre] [temps]                                                  | 3 seconds |
| **sanctions**       | Affiche la liste des infractions commises par un membre !                                       | sanctions [@membre]                                                     | 3 seconds |
| **setwarns**        | Définissez les sanctions qu'obtiendront les membres au bout d'un certain nombre de warns !      | setwarns [kick/ban] [nombre/reset]                                      | 3 seconds |
| **unban**           | Unban l'utilisateur du serveur !                                                                | unban [userID/user#0000]                                                | 3 seconds |
| **unmute**          | Unmute le membre mentionné !                                                                    | unmute [@membre]                                                        | 3 seconds |
| **warn**            | Averti un membre en messages privés                                                             | warn [@membre] [raison]                                                 | 3 seconds |

### Fun (12 commands)

| Name          | Description                                                                                              | Usage                          | Cooldown  |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------ | --------- |
| **8ball**     | Je vous dis la vérité !                                                                                  | 8ball [question]               | 3 seconds |
| **ascii**     | Transforme votre texte en caractères ascii !                                                             | ascii [texte]                  | 5 seconds |
| **findwords** | Lance une partie de findwords, un jeu ou vous devez trouver des mots !                                   | findwords                      | 5 seconds |
| **flip**      | Je lance les dés pour vous !                                                                             | flip                           | 1 seconds |
| **fml**       | Affiche une VDM au hasard                                                                                | fml                            | 3 seconds |
| **joke**      | Affiche une blague en français                                                                           | joke                           | 3 seconds |
| **lmg**       | Renvoie un lien vers lmgtfy.com                                                                          | lmg [question]                 | 1 seconds |
| **love**      | Génère une image de type "love" grâce à l'API Nekobot                                                    | love [@user1] (@user2)         | 5 seconds |
| **lovecalc**  | Combien d'amour y a t'il entre deux personnes ? *Ceci est une commande fun, à ne pas prendre au sérieux* | lovecalc [@membre1] (@membre2) | 1 seconds |
| **number**    | Trouvez le nombre que j'ai choisi !                                                                      | number                         | 5 seconds |
| **random**    | Tire aléatoirement un des choix que vous me donner !                                                     | random [choix1/choix2/etc...]  | 5 seconds |
| **tcl**       | Affiche le dernier tweet de @lesjoiesducode !                                                            | tcl                            | 3 seconds |

### Music (8 commands)

| Name       | Description                                        | Usage                      | Cooldown  |
| ---------- | -------------------------------------------------- | -------------------------- | --------- |
| **lyrics** | Affiche les paroles d'une chanson                  | lyrics [nom-de-la-chanson] | 5 seconds |
| **np**     | Affiche des informations sur la chanson actuelle ! | np                         | 5 seconds |
| **pause**  |                                                    | pause                      | 5 seconds |
| **play**   | Joue de la musique !                               | play [titre]               | 5 seconds |
| **queue**  | Affiche la queue                                   | queue                      | 5 seconds |
| **resume** |                                                    | resume                     | 5 seconds |
| **skip**   | Passe à la chanson suivante !                      | skip                       | 5 seconds |
| **stop**   | Arrête la musique en cours !                       | stop                       | 5 seconds |

### Owner (5 commands)

| Name             | Description                                                                                     | Usage                       | Cooldown  |
| ---------------- | ----------------------------------------------------------------------------------------------- | --------------------------- | --------- |
| **eval**         | Exécute le code                                                                                 | eval [code]                 | 3 seconds |
| **getconf**      | Affiche la configuration d'un serveur                                                           | getconf [serveur ID]        | 3 seconds |
| **getinvite**    | Génère une invitation vers le serveur en question. Veillez à faire bon usage de cette commande. | getinvite [ID/Nom]          | 3 seconds |
| **reload**       | Reload une commande du bot !                                                                    | reload [nom-de-la-commande] | 3 seconds |
| **servers-list** | Affiche la liste des serveurs du bot !                                                          | servers-list                | 5 seconds |

