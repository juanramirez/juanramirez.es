---
title: "7 consejos para que tus code reviews sean mejores [<em>entrada recuperada</em>]"
date: 2021-08-29 13:30:00 +0200
author: "Juan Ramírez"
tags:
  - code-review
featured-image: "/assets/images/code_review.png"
featured-image-alt: Las code reviews son una forma fantástica de mantener a todo el equipo alineado
excerpt: "Las code reviews son una forma fantástica de mantener a todo el equipo en la misma página y animar a todos a seguir buenas prácticas de programación. Aquí tienes consejos para evitar que tus code reviews se vuelvan dolorosas o inútiles."
lang: es
---

<div class="recovered-note"><strong>Nota:</strong> Esta entrada ha sido recuperada de mi archivo tras haber estado perdida <a href="/abi/about-me/hola-y-bienvenidos/">debido a mi lesión cerebral</a>. Se publicó originalmente en mi antiguo blog de desarrollo el 25 de septiembre de 2017.</div>

![code-review](/assets/images/code_review.png)

Las code reviews llevan tiempo. Por supuesto. Pero son útiles. **Muy** útiles. Son una forma fantástica de mantener a todo el equipo alineado y animar a todos a hacer _las cosas bien_ y a hacerlas _correctamente_. Aquí tienes algunos consejos que he aprendido a lo largo de los años para evitar que mis code reviews se vuelvan dolorosas o inútiles:

1. **Crea revisiones para todo el código que subas**. No, en serio: **hazlo**. Algunas empresas o equipos tienen este proceso semi-automatizado o muy establecido como parte de su cultura técnica. Si no es así, pide a tu responsable que lo implemente. Y si te responde que es mala idea, ¡huye de esa empresa! _¡YA!_.

    **Recuerda:** La mayoría de las veces, _code reviews opcionales_ significa _no hay code reviews_.

2. **Crea tus revisiones _pronto y a menudo_**. No esperes a tener un monstruo con un millón de líneas de código. Varios cambios pequeños y específicos son mucho más fáciles de revisar que un gran cambio con muchas modificaciones. Además, es más probable que tus cambios sean aceptados si los divides en varios pasos pequeños.

3. **Revisa tu propio código** antes de enseñárselo a tus compañeros. Imagina que recibes ese código de otra persona para revisarlo por primera vez. **Sé tu mejor revisor**, sé crítico con tu código. Tómate tu tiempo.

4. Para evitar ruido, usa tu IDE para identificar posibles bugs. Los IDE modernos analizan tu código para encontrar posibles advertencias o errores. Si tu IDE no lo hace automáticamente, **pasa tu código por un analizador estático**.

    Si tu equipo usa un estándar de formato, **usa una herramienta automática de formateo**. Así tus compañeros podrán centrarse en lo realmente importante y evitar discusiones tontas sobre el estilo.

5. **_Prepara_ tu revisión**. No solo añadas el código o los cambios que quieres revisar. Enlaza la revisión con el ticket correspondiente y/o explica la funcionalidad que intentas añadir, centrándote en detalles de implementación que quizá _no_ estén en el ticket pero sean relevantes. Si hay alguna parte del código que no es obvia, deberías explicar _por qué_ lo hiciste así y no de otra forma.

6. Elige cuidadosamente a las personas que quieres que revisen tu código. Si hay una política para ello, síguela. En la mayoría de los casos, sin embargo, no todo el equipo necesita revisar tu código.

    Probablemente deban estar incluidos tu responsable, personas con experiencia en el dominio del producto, el autor original del código que tocas (o alguien que lo haya tocado antes) y cualquiera que esté desarrollando una funcionalidad relacionada en paralelo (pregunta si es necesario).

7. **No te lo tomes como algo personal**. Es _tu código_ lo que se revisa, no _a ti_. Hilos largos de comentarios en una revisión no significan que alguien te odie o quiera fastidiarte. Más probablemente, significará que no está de acuerdo contigo en algún aspecto técnico concreto. Sé amable, **asume la mejor intención** del revisor y responde a todos los comentarios con educación.

    **Prepárate para aprender de los demás**. Agradece las buenas sugerencias y expresa tus argumentos con claridad, pero con educación, si hay algo con lo que honestamente no estés de acuerdo.