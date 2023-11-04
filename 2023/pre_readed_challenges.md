# Reto 1: ¡Arregla Twitter!
## Problema:
Twitter ha sido comprado y quieren eliminar los bots. Te han pedido ayuda para detectar el número de usuarios en su base de datos que tienen datos corruptos.

La base de datos es muy antigua y está en un formato extraño. Los perfiles requieren tener los siguientes datos:
- nombre de usuario,
- email,
- contraseña,
- edad,
- ubicación
- número de seguidores,

Todo está en un fichero donde los datos de usuario son una secuencia de pares `key:value`, que pueden estar en la misma línea o separado por líneas, y cada usuario está separado por un salto de línea. ¡Ojo porque puede estar todo desordenado!

### Ejemplo de input:
- El primer usuario SÍ es válido. Tiene todos los campos.
- El segundo usuario SÍ es válido. Tiene todos los campos.
- El tercer usuario NO es válido. Le falta el campo `age`.
- El cuarto usuario SÍ es válido. Tiene todos los campos.

### Ahora que ya sabes esto, 
Usa este input para detectar los usuarios incorrectos: https://codember.dev/users.txt

### Pistas
- Los datos pueden estar en cualquier orden.
- Los datos pueden estar en la misma línea o separados por líneas.
- Los usuarios se separan por un salto de línea en blanco.
- Los usuarios pueden estar repetidos, pero no importa, siguen siendo válidos.
- Pueden venir datos que no son necesarios para el usuario pero eso no lo hacen inválidos.

### Cómo enviar la solución
Usa el comando "_submit_" para enviar tu solución con el número de usuarios correctos + el nombre del último usuario válido. Por ejemplo:

# Reto 2: ¡Atrapa a esos ciber criminales!
Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

 Con su método ha conseguido descifrar estos mensajes:

Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

También lo tienes disponible en esta URL:

Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.

Parece que los números tienen algo que ver con el código ASCII.

Los espacios en blanco parece que son simplemente espacios...

Usa el comando "submit" para enviar tu solución con la frase descifrada, en minúsculas y respetando los espacios en blanco. Por ejemplo:
