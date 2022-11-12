const posts = [
    {
        id: "017",
        title: "Mi experiencia hasta lograr neuro",
        content: "El Síndrome de Asperger es un trastorno del neurodesarrollo que afecta al funcionamiento social, a la comunicación y el lenguaje, a la capacidad motora y a las actividades e intereses del individuo que lo sufre, pese a que la inteligencia es normal. Existen distintas conductas que pueden indicar la presencia de este trastorno. En este texto se exponen diez señales características de esta patología.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "016",
        title: "Errores que la mayoría de neuro cometen",
        content: "Elaboró la Teoría del Aprendizaje Social, en la que presta atención al aprendizaje por observación y a la importancia de las creencias de autoeficacia para la regulación del comportamiento humano. Además, introdujo también el concepto de determinismo recíproco, en el que explica que no sólo el medio ambiente influye en la persona, sino que la persona también es capaz de cambiar el medio ambiente.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "015",
        title: "5 hábitos sobre neuro que aplico a mi día a día",
        content: "De hecho, pocos casos de necrofilia son tan famosos como el de este médico alemán que decidió afincarse en Estados Unidos a finales de los años 20. Tanzler llevó su obsesión por una mujer más allá de la muerte, y fue capaz de exhumar el cadáver de la que consideraba la mujer de su vida, para continuar teniendo relaciones sexuales con ella. Puedes conocer su historia pinchando en el título.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "014",
        title: "5 cosas que desearía haber sabido sobre neuro cuando empecé",
        content: "Los psicólogos clásicos sentaron las bases de lo que hoy es la psicología, pero la ciencia psicológica necesita estar actualizada para satisfacer las necesidades de los seres humanos. Aquí tienes una lista con los 12 psicólogos más influyentes de hoy en día, con nombres de la talla de Albert Bandura, Elizabeth Loftus, Philip Zimbardo, Steven Pinker...",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "013",
        title: "Una introducción a neuro",
        content: "Los textos pueden ser de gran ayuda, pero los documentales también pueden aportarnos conocimiento, además de entretenimiento. Para facilitarte la vida, nos hemos tomado la molestia de seleccionar quince documentales sobre psicología imprescindibles. Cada uno de ellos aborda una temática distinta, así que puedes escoger los que más te interesen. ¡Disfrútalos!",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "012",
        title: "Mi presentación sobre neuro que di en el evento SummerNeuro",
        content: "A pesar de que estos individuos quieren mostrar una gran seguridad en sí mismas, eso es solo apariencia, lo que se conoce como una falsa autoconfianza. Por tanto, ¿cómo son realmente las personas egocéntricas? ¿Cuáles son sus rasgos más característicos? Descúbrelo en este artículo.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "011",
        title: "Mi predicción sobre la industria de neuro para los próximos años",
        content: "Es decir, que a través de la interacción amistosa entre el gato y la persona es posible superar situaciones de estrés, ansiedad o un bajo estado de ánimo. Además, los gatos pueden ayudarte a mejorar tu salud física y tu calidad de vida. Así que, si quieres saber más sobre los beneficios de la gatoterapia, te invitamos a que leas esta publicación.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "010",
        title: "Mi objetivo acerca de la neuro y cómo lo conseguiré",
        content: "Una vez finalizado el instituto, muchos jóvenes se plantean seguir sus estudios para formarse como profesionales de esta disciplina. Pero, ¿cuáles son los “pros” y “contras” de esta carrera? En este artículo se explican las ventajas e incontinentes de cursar el Grado en Psicología, para que puedas conocer varios detalles importantes sobre las salidas profesionales y sobre el currículo académico. Lectura obligatoria.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "009",
        title: "Mi experiencia hasta lograr neuro",
        content: "El Síndrome de Asperger es un trastorno del neurodesarrollo que afecta al funcionamiento social, a la comunicación y el lenguaje, a la capacidad motora y a las actividades e intereses del individuo que lo sufre, pese a que la inteligencia es normal. Existen distintas conductas que pueden indicar la presencia de este trastorno. En este texto se exponen diez señales características de esta patología.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "008",
        title: "Errores que la mayoría de neuro cometen",
        content: "Elaboró la Teoría del Aprendizaje Social, en la que presta atención al aprendizaje por observación y a la importancia de las creencias de autoeficacia para la regulación del comportamiento humano. Además, introdujo también el concepto de determinismo recíproco, en el que explica que no sólo el medio ambiente influye en la persona, sino que la persona también es capaz de cambiar el medio ambiente.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "007",
        title: "5 hábitos sobre neuro que aplico a mi día a día",
        content: "De hecho, pocos casos de necrofilia son tan famosos como el de este médico alemán que decidió afincarse en Estados Unidos a finales de los años 20. Tanzler llevó su obsesión por una mujer más allá de la muerte, y fue capaz de exhumar el cadáver de la que consideraba la mujer de su vida, para continuar teniendo relaciones sexuales con ella. Puedes conocer su historia pinchando en el título.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "006",
        title: "5 cosas que desearía haber sabido sobre neuro cuando empecé",
        content: "Los psicólogos clásicos sentaron las bases de lo que hoy es la psicología, pero la ciencia psicológica necesita estar actualizada para satisfacer las necesidades de los seres humanos. Aquí tienes una lista con los 12 psicólogos más influyentes de hoy en día, con nombres de la talla de Albert Bandura, Elizabeth Loftus, Philip Zimbardo, Steven Pinker...",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "005",
        title: "Una introducción a neuro",
        content: "Los textos pueden ser de gran ayuda, pero los documentales también pueden aportarnos conocimiento, además de entretenimiento. Para facilitarte la vida, nos hemos tomado la molestia de seleccionar quince documentales sobre psicología imprescindibles. Cada uno de ellos aborda una temática distinta, así que puedes escoger los que más te interesen. ¡Disfrútalos!",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "004",
        title: "Mi presentación sobre neuro que di en el evento SummerNeuro",
        content: "A pesar de que estos individuos quieren mostrar una gran seguridad en sí mismas, eso es solo apariencia, lo que se conoce como una falsa autoconfianza. Por tanto, ¿cómo son realmente las personas egocéntricas? ¿Cuáles son sus rasgos más característicos? Descúbrelo en este artículo.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "003",
        title: "Mi predicción sobre la industria de neuro para los próximos años",
        content: "Es decir, que a través de la interacción amistosa entre el gato y la persona es posible superar situaciones de estrés, ansiedad o un bajo estado de ánimo. Además, los gatos pueden ayudarte a mejorar tu salud física y tu calidad de vida. Así que, si quieres saber más sobre los beneficios de la gatoterapia, te invitamos a que leas esta publicación.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "002",
        title: "Mi objetivo acerca de la neuro y cómo lo conseguiré",
        content: "Una vez finalizado el instituto, muchos jóvenes se plantean seguir sus estudios para formarse como profesionales de esta disciplina. Pero, ¿cuáles son los “pros” y “contras” de esta carrera? En este artículo se explican las ventajas e incontinentes de cursar el Grado en Psicología, para que puedas conocer varios detalles importantes sobre las salidas profesionales y sobre el currículo académico. Lectura obligatoria.",
        created_at: "11/11/2022",
        image: "/images/brain.jpg",
        tags: ["neurociencia", "salud mental", "psicología"]
    },
    {
        id: "001-3b13060c-6276-11ed-9b6a-0242ac120002",
        title: "Puede ser una demencia reversible",
        content: `<p>Tras el título, muchos me preguntaréis, ¿no decían que la demencia es progresiva e irreversible?</p>
        <p>Pues sí, así es. Pero también es cierto, que las demencias vienen provocadas por diferentes motivos, y a veces, ese motivo puede tener solución médica.</p>
        <p>Mi intención es informar sobre ¿qué es? y ¿cómo identificarla?, ya que es muy importante que acudamos al especialista sanitario si empezamos a percibir estos signos y síntomas, ya que podría tratarse de un problema médico con solución y podría revertir.</p>
        <h2>¿Qué es una demencia reversible?</h2>
        <p>Una demencia reversible no es ni más ni menos que un problema médico, que está cursando con síntomas parecidos a los que provoca una demencia. En otras palabras, parece una demencia, pero no necesariamente lo es.</p>
        <p>Para explicarlo, he hecho una recopilación breve de las posibles causas médicas que pueden provocar síntomas parecidos a la demencia, e intentaré recoger algunos signos que podríamos detectar:</p>
        <h2>Causas de una posible demencia reversible</h2>
        <p>Drogas o medicamentos</p>
        <p>Hay algunos medicamentos que provocan síntomas o procesos demenciales, especialmente en las personas mayores, que generalmente toman varias medicaciones a la vez.</p>
        <p>Los principales síntomas que podríamos encontrar serían en las primeras semanas tras comenzar a tomar el fármaco:</p>
        <p>Problemas de memoria que van y vienen, ellos mismos serán conscientes de esos problemas.</p>
        <p>Apareciendo problemas de conducta, cambios en el estado de humor, mayor irritabilidad repentina, suspicacia, o estado depresivo. Estos cambios cuando aparecen, las personas de su entorno los suelen identificar ya que la persona “no suele ser así”… es un cambio llamativo en poco tiempo.</p>
        <p>En ocasiones puntuales incluso pueden aparecer alucinaciones o ideas delirantes (algo poco común) pero importante si aparecen.</p>
        <p>Infecciones</p>
        <p>Hay diferentes tipos de infecciones que pueden generar procesos demenciales. No quiero tampoco especificar todos, porque eso se trata más del terreno médico, por lo que voy únicamente a puntualizar los que son más frecuentes:</p>
        <p>La meningoencefalitis suele aparecer de forma aguda y parece una demencia.</p>
        <p>La tuberculosis cerebral aparece con fiebres, cefaleas y suele aparecer problemas de consciencia y de memoria, de una forma muy aguda.</p>
        <p>Criptococosis, es una infección que causa alteraciones de la conducta, psicosis, euforia, etc.</p>
        <p>En el caso de padecer cisticercosis puede aparecer de una forma muy rara, síntomas como enlentecimiento en el pensamiento, notar que la persona va muy lenta en su lenguaje y pensamiento, también alteraciones en la consciencia.</p>
        <p>Demencia por déficit de Vitamina B12</p>
        <p>Es una causa muy rara por la que se llega a padecer demencia.</p>
        <p>Los rasgos que comienzan a aparecer suelen ser lentitud en el pensamiento (cuando preguntas algo a la persona notas que tarda muchísimo en contestar, por ejemplo), falta de concentración, con problemas de memoria. Además, en el estado de ánimo se pueden encontrar rasgos depresivos (de pronto deja de querer salir a la calle, se le percibe apagado/a, sin ganas de hablar) o todo lo contrario, en estado de euforia o alucinaciones.</p>
        <Image
        src="/images/001-3b13060c-6276-11ed-9b6a-0242ac120002/img_1.jpg"
        alt="Picture of the author"
        width={250}
        height={80}
        />
        <p>Hidrocefalia</p>
        <p>Las alteraciones que suelen aparecer suelen ser problemas en la marcha y también incontinencia urinaria.</p>
        <p>Se presentan con cambios en el estado de ánimo, pudiendo pasar por la apatía, irritabilidad o euforia, teniendo también el pensamiento enlentecido y problemas de memoria.</p>
        <p>Tumores cerebrales (Neoplasias)</p>
        <p>Sólo podemos hablar de los tumores que se desarrollan en zonas concretas del cerebro. Ya que son los que pueden producir trastornos similares a una demencia.</p>
        <p>Se comienzan a percibir posibles cambios de personalidad apatía, irritabilidad, llanto inmotivado, o desinhibición importante.</p>
        <p>Tengo que decir, que son muy raros, ¡no alarmarse!</p>
        <p>¿Cómo saber si es una demencia reversible?</p>
        <p>Una demencia reversible suele presentarse de una manera más o menos rápida. Estamos hablando de un periodo de pocos días o pocas semanas.</p>
        <p>Si se trata de un periodo de empeoramiento de meses o años, estaríamos hablando de otra cosa, seguramente.</p>
        <p>Por último…</p>
        <p>No quisiera despedirme, sin incidir en algo que considero importante:</p>
        <p>Apenas se comience a percibir cambios repentinos en una persona mayor cercana, como los que hemos comentado, es importante que no se piense “ya se le pasará”, sino que acudamos al/a médico de cabecera, para que él/ella valore la situación, ya que podemos ayudar a solucionar el problema si todavía se encuentra en las primeras fases de evolución.</p>
        <p>Sin más, me despido esperando de nuevo haber podido ayudar a resolver algunas dudas, así como a descubrir información que no se tenía.</p>
        <p>Un saludito a todos y todas y como siempre:</p>
        <p>¡Feliz vida os desea laneuronaMina!</p>
        <Image
        src="/images/logo_post.png"
        alt="Logo Neurona"
        width={50}
        height={50}
        />`,
        created_at: "17/03/2020",
        image: "/images/001-3b13060c-6276-11ed-9b6a-0242ac120002/post.png",
        tags: ["Prevención"]
    },
]

export default posts;