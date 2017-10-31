## ENCRYPTED CAESAR
1. Pedir al usuario una frase por medio de un prompt()
2. Verificar si el usuario no ingreso un campo vacío o algun número, si no lo hizo continuar, de lo contrario enviar un mensaje de "error: no se aceptan espacios y/o números" y volver al inicio
3. Para cifrar la frase comenzamos con Obtener el codigo Ascii de cada una de las letras requeridas en la frase a traves de un .charCodeAt() y teniendo en cuenta que la letra "A" comienza en indice 65
4. Aplicar la formula (x+n)%26
5. Obtener el incremento de cada una de las letra.
6. Una vez obtenido el nuevo numero será necesario leer ese numero y convertirlo a codigo ascii  mediante String.fromCharCode()
7. Leer en la consola el valor y
8. retornar la misma frase pero encriptada
9. Ahora para descifrar la frase comenzamos con
10. Obtener el codigo Ascii de cada una de las letras requeridas en la frase a traves de un .charCodeAt()
11. Aplicare la formula (x-n)%26
12. Obtener el decremento de cada una de las letra.
13. Una vez obtenido el nuevo numero será necesario leer ese numero y convertirlo a codigo ascii  mediante String.fromCharCode()
14. Leer en la consola el valor y
15. retornar la misma frase pero descifrad
16. fin
