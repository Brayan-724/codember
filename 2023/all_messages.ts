const dl = "Por ",
  pl = "Algo estás tocando que no deberías... Para.",
  fl = "¿Cómo funciona?",
  Ol = "Te da una pista de cómo empezar",
  Gl = `Inserta el diskette #49 y presiona ENTER para salir... 

O usa "logout" para cerrar tu sesión.`,
  zl = "Archivo ",
  Kl = " no encontrado.",
  Rd = "El próximo reto se publica en...",
  Dd = "¡El nuevo reto ya está disponible!",
  Pd = "Entra a",
  jd = "para no perderte ninguna pista.",
  Md = "días",
  Fd = "horas",
  Ud = "min",
  kd = "seg",
  $d = "Ranking de participantes",
  Gd = "Puntos",
  Bd = "Nombre de usuario",
  Wd = "El juego que buscas no está instalado...",
  Vd = "Cargando juego...",
  e_ = "No has pasado ninguna URL",
  t_ = "Oye {username}, ¡Tienes que enviar una solución!",
  n_ = "Oye {username}, ¿por qué no envías un string como todo el mundo?",
  o_ =
    "¡Eh! El reto #{solvedChallenge} ya lo habías resuelto! No hay más puntos para ti, pero te he tirado un poco de confetti.",
  a_ = "El campo no puede estar vacío!",
  i_ = "Oye {username}, ¿por qué no envías un string como todo el mundo?",
  c_ = "estoy cansado",
  l_ = "Me gustaría hacer ping a cosas MÁS INTERESANTES",
  u_ = "Ahora con juegos.",
  d_ = "Intenta",
  __ = "jugar tetris.",
  m_ = "Controles: ",
  h_ = ": Mover pieza",
  p_ = ": Rotar pieza",
  E_ = ": Salir",
  f_ =
    "Primera versión. El primer reto está en CHALLENGE_01.txt. ¿Has revisado el mail?",
  T_ = "Se añaden los comandos: curl, countdown y cowsay.",
  C_ =
    "Un montón de nuevos secretos. Quieres jugar al Tetris? ¡Prueba! ¿Y qué hay del mítico truco de Google que rota la pantalla...?",
  b_ =
    "Nuevo reto y un secreto que es un homenaje a los jugadores de Contra, de Konami. También hay un nuevo comando mail.",
  g_ =
    "¡Otro reto más! Ayuda a tu amigo a recuperar su contraseña de su monedero digital.",
  v_ =
    "¡Nuevo reto de programación! ¿Y has visto que ya tienes acceso a una carpeta? Hemos instalado npm también, para que puedas usar algunas de sus funciones.",
  N_ = "Nuevo comando disponible. ¡Pruébalo! El nuevo comando se llama: midu",
  npm_not_allowed =
    "npm no está permitido en esta carpeta. ¿Seguro que hay un package.json?",
  coupon_title = "Enjoy your coupon!",
  coupon_description = "A free book to keep learning about React: ",
  coupon_message = "Enjoy your coupon: ",
  coupon_error =
    "[Error]: You need to solve all challenges before getting your gift!";

const message_bindings = {
  FOOTER_TEXT: dl,
  WARNING: pl,
  HELP_HINT: Ol,
  EXIT_TEXT: Gl,
  NOT_FOUND_CAT_1: zl,
  NOT_FOUND_CAT_2: Kl,
  COUNTDOWN_NEXT_CHL: Rd,
  COUNTDOWN_NEW_CHL: Dd,
  COUNTDOWN_TWITCH_INFO_1: Pd,
  COUNTDOWN_TWITCH_INFO_2: jd,
  DAYS: Md,
  HOURS: Fd,
  MINUTES: Ud,
  SECONDS: kd,
  RANKING_TITLE: $d,
  RANKING_SCORE: Gd,
  RANKING_USERNAME: Bd,
  NOT_FOUND_GAME: Wd,
  GAME_LOADING: Vd,
  CURL_NO_URL: e_,
  SEND_SOLUTION_NO_SOLUTION: t_,
  SEND_SOLUTION_NO_STRING: n_,
  SEND_SOLUTION_SOLVED: o_,
  PING_FILE_REQUIRED: a_,
  PING_NO_STRING: i_,
  PING_TIRED: c_,
  PING_TIRED_2: l_,
  VERSION_1: u_,
  VERSION_2: d_,
  VERSION_3: __,
  NPM_NOT_ALLOWED: npm_not_allowed,
  COUPON_TITLE_ACHIEVEMENT: coupon_title,
  COUPON_DESCRIPTION_ACHIEVEMENT: coupon_description,
  COUPON_MESSAGE: coupon_message,
  COUPON_ERROR: coupon_error,
};

const Au = "Reto 3: La zebra de colores",
  Hu =
    "TMChein ya se está preparando para las fiestas y quiere empezar a decorar la casa con las luces de navidad.",
  Ru =
    "Quiere comprar una pero sus favoritas son las que tienen dos colores que se van alternando. Como una zebra de dos colores.",
  Du =
    "Ha hecho que las luces sean Arrays y cada posición un color. Y quiere saber qué luces tienen las zebras más largas y cuál es el último color de esa sucesión de colores. Por ejemplo:",
  Pu =
    "Fíjate que sólo quiere saber la longitud de cuando dos colores se van alternando. Una vez que se rompe la alternancia de los dos colores, deja de contar.",
  ju = "Nos ha dejado en una URL un array con las luces que se quiere comprar:",
  Mu =
    "Ahora nos toca a nosotros decirle cuál es la zebra de colores más larga que encontrará en ese array.",
  Fu =
    "Recuerda que una zebra de colores es cuando dos colores se alternan una y otra vez. Si se repite un color en la posición siguiente o es un tercer color, entonces se deja de contar.",
  Uu =
    "Lo que queremos calcular es la tira de colores más larga en forma de zebra y el último color de esa tira de colores.",
  ku = 'Usa el comando "submit" para enviar tu solución. Por ejemplo:',
  $u = "Challenge 4: Encuentra la contraseña de tu amigo",
  Gu =
    "Un amigo compró 5 BitCoins en 2008. El problema es que lo tenía en un monedero digital... ¡y no se acuerda de la contraseña!",
  Bu = "Nos ha pedido ayuda. Y nos ha dado algunas pistas:",
  Wu = `- Es una contraseña de 5 dígitos.
- La contraseña tenía el número 5 repetido como mínimo dos veces.
- El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.`,
  Vu = `Nos ha puesto algunas ejemplos:
55678 es correcto lo cumple todo
12555 es correcto, lo cumple todo
55555 es correcto, lo cumple todo
12345 es incorrecto, no tiene el 5 repetido.
57775 es incorrecto, los números no van de forma creciente`,
  qu =
    "Dice que el password está entre los números 11098 y 98123. ¿Le podemos decir cuantos números cumplen esas reglas dentro de ese rango?",
  zu =
    "Envía la solución con el comando submit, y el número de passwords que cumplen el criterio junto con el password que está en el índice 55 de la lista de passwords válidos, separado por un guión.",
  Ku =
    "Por ejemplo, para 87 resultados y el password 35522 en la posición 55 sería:",
  Xu = "Challenge 5: Battle Royale de frameworks y bibliotecas",
  Qu = "{from} mata a {to}",
  Yu =
    "Hay tanto framework y biblioteca que ya no sabemos qué usar. Así que un comité ha decidido hacer una especie de Los Juegos del Hambre para decidir qué tecnología se queda.",
  Ju =
    "Ha puesto todas las tecnologías en círculo de forma aleatoria. La tecnología en el índice 0 empieza matando a la que tiene justo a la derecha (índice + 1).",
  Zu =
    "El siguiente turno es para la tecnología que esté viva que queda a la derecha de la que se acaba de morir. Y así sucesivamente hasta que sólo quede una. Mira este ejemplo de un grupo de 10 tecnologías, paso a paso:",
  ed = "La tecnología en el índice 4 es la que ha sobrevivido.",
  td =
    "Ahora, para probar que somos capaces de crear un algoritmo que funcione, tenemos la lista de mecenas de la comunidad de midudev:",
  nd =
    "Tienes que crear un algoritmo que nos diga qué usuario sobreviviría usando el mismo sistema.",
  od =
    "Envía la solución con el comando submit, y el índice de la persona que sobrevive y su nombre de usuario, separado de un guión.",
  rd =
    "Por ejemplo, si el usuario que sobrevive es facundopacua y está en el índice 8 sería:";

const challenges = [
  {
    name: Au,
    DESC_1: Hu,
    DESC_2: Ru,
    DESC_3: Du,
    DESC_4: Pu,
    DESC_5: ju,
    DESC_6: Mu,
    HINT_1: Fu,
    HINT_2: Uu,
    A_1: ku,
  },
  {
    name: $u,
    DESC_1: Gu,
    DESC_2: Bu,
    DESC_3: Wu,
    DESC_4: Vu,
    DESC_5: qu,
    A_1: zu,
    A_2: Ku,
  },
  {
    name: Xu,
    KILL: Qu,
    DESC_1: Yu,
    DESC_2: Ju,
    DESC_2p: Zu,
    DESC_3: ed,
    DESC_4: td,
    DESC_5: nd,
    A_1: od,
    A_2: rd,
  },
];

const changelogs = [
  f_,
  T_,
  C_,
  b_,
  g_,
  v_,
  N_,
];

const tetris = {
  CONTROLS_0: m_,
  CONTROLS_1: h_,
  CONTROLS_2: p_,
  EXIT: E_,
};
