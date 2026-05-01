---
title: "Cómo hacer que Git ignore archivos localmente [<em>entrada recuperada</em>]"
date: 2021-08-29 13:00:00 +0200
author: "Juan Ramírez"
image: "/assets/images/posts/how-to-tell-git-to-ignore-files-locally-solid.png"
tags:
  - control-de-versiones
  - git
excerpt: "Excluir archivos del control de versiones en Git es fácil usando el conocido archivo .gitignore. Pero puede que no quieras usarlo para todo."
lang: es
---

<div class="recovered-note"><strong>Nota:</strong> Esta entrada ha sido recuperada de mi archivo tras haber estado perdida <a href="/abi/about-me/hola-y-bienvenidos/">debido a mi lesión cerebral</a>. Se publicó originalmente en mi antiguo blog de desarrollo el 1 de agosto de 2017.</div>

Excluir archivos del control de versiones en Git es fácil [usando el conocido archivo `.gitignore`](https://git-scm.com/docs/gitignore).

Este archivo `.gitignore` normalmente está **versionado**.

Eso es _inteligente_, porque la mayoría de los proyectos de software generan binarios o código intermedio al ejecutarse o compilarse. Además, si trabajas en un entorno virtual (por ejemplo, [`virtualenv`](https://virtualenv.pypa.io) en Python) o con un gestor de paquetes ([`npm`](https://www.npmjs.com/) o [RubyGems](https://rubygems.org/)), probablemente tendrás tus dependencias en un directorio dentro del repo.

Añadir esos archivos o directorios generados al `.gitignore` beneficiará a todos los implicados, porque así se evita que alguien los añada al proyecto y cada uno los tendrá generados localmente.

**Por cierto:** Puedes poner varios archivos `.gitignore`, uno en cada directorio, para establecer reglas específicas por carpeta.

## ¿Por qué querríamos excluir archivos _solo para nosotros_?
Bueno, puede haber varias razones.

Primero (y es un caso muy típico), imagina que tienes **archivos generados específicos de tu IDE o tu sistema operativo**. Ejemplos típicos son los archivos `.DS_Store` en MacOS, el directorio `.idea` de Jetbrains o los archivos de backup `*~` de `vim`.

¿Por qué alguien que usa Atom en Linux iba a querer esas líneas en el `.gitignore` común? ¿Deberíamos cubrir ahí todos los patrones de archivos de todos los IDE/OS/entornos del mundo? No parece buena idea, ¿verdad? Además, podrías tener un conflicto con algún editor que use un patrón que coincida con un archivo que sí necesitas versionar.

Segundo, quizá quieras usar un **archivo o directorio especial en el proyecto para guardar algo**, pero, igual que antes, es algo con lo que los demás no tienen que lidiar. Por ejemplo, yo suelo crear un directorio llamado `.snippets` en cada proyecto, donde guardo... bueno, fragmentos de código, para tenerlos siempre localizados.

Para ignorar este tipo de archivos localmente, te explico dos métodos:

### Método #1: `core.excludesFile`
Para este método, crea un archivo llamado como quieras (por ejemplo, `~/.gitignore_global`) y especifica su ruta en la variable de configuración global de git `core.excludesFile`.

Este método hace que git ignore archivos en **todos los repos locales**. Es ideal para archivos generados por el entorno, pero quizá no para archivos específicos de un proyecto. Si quieres ignorar archivos solo en un proyecto, mejor usa el segundo método.