const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const preguntas = {
   "que es el dengue": "El dengue es una enfermedad infecciosa transmitida por mosquitos del género Aedes, principalmente Aedes aegypti. Es causada por un virus y puede ser potencialmente grave.",
    "sintomas del dengue": "Los síntomas principales incluyen: fiebre alta, dolor de cabeza intenso, dolor detrás de los ojos, dolores musculares y articulares, náuseas, vómitos y erupción cutánea.",
    "como se transmite": "El dengue se transmite a través de la picadura de mosquitos Aedes infectados. Principalmente el Aedes aegypti, que suele picar durante el día.",
    "como prevenir": "Para prevenir el dengue: elimina agua estancada, usa repelente, instala mallas en ventanas, usa ropa que cubra brazos y piernas, y mantén limpios patios y jardines.",
    "tratamiento": "No existe un tratamiento específico. Se recomienda descansar, mantenerse hidratado, tomar medicamentos para bajar la fiebre (siguiendo indicaciones médicas) y consultar a un profesional de salud.",
    "lugares de riesgo": "El dengue es más común en regiones tropicales y subtropicales como América Latina, Sudeste Asiático y algunas partes de África.",
    "cuando ir al medico": "Debes ir al médico si tienes fiebre alta, signos de deshidratación, dolor abdominal intenso, sangrado o si los síntomas empeoran.",
    "fases del dengue": "El dengue tiene tres fases: febril (fiebre alta y síntomas generales), crítica (pueden aparecer complicaciones como sangrados) y recuperación (mejoría progresiva).",
    "tipos de dengue": "Existen cuatro serotipos del virus del dengue (DENV-1, DENV-2, DENV-3 y DENV-4). Una persona puede infectarse más de una vez con diferentes serotipos.",
    "diferencia entre dengue clasico y grave": "El dengue clásico es la forma leve con fiebre y malestar general. El dengue grave puede causar hemorragias, shock y daño orgánico, poniendo en riesgo la vida.",
    "organos afectados": "El dengue puede afectar varios órganos, incluyendo el hígado, el corazón y el sistema circulatorio. En casos graves, puede causar insuficiencia multiorgánica.",
    "dengue es mortal": "En su forma grave, el dengue puede ser mortal si no se trata a tiempo. Sin embargo, con atención médica adecuada, la mayoría de los pacientes se recuperan.",
    "evolucion del dengue en el cuerpo": "El virus del dengue ingresa al cuerpo a través de la picadura del mosquito, se replica en las células y afecta el sistema inmunológico, causando inflamación y síntomas.",
    "cuanto dura el dengue": "El dengue dura entre 7 y 10 días, aunque la fatiga y el malestar pueden persistir por semanas en algunos casos.",
    "mosquito que transmite el dengue": "El principal mosquito transmisor es el Aedes aegypti. También el Aedes albopictus puede transmitir el virus en algunas regiones.",
    "el dengue se contagia entre personas": "No, el dengue no se transmite de persona a persona. Solo se contagia a través de la picadura de un mosquito infectado.",
    "cuantas veces se puede tener dengue": "Se puede tener dengue hasta cuatro veces, ya que existen cuatro serotipos del virus. La segunda infección puede ser más grave.",
    "dengue o gripe": "El dengue se diferencia de la gripe porque no causa síntomas respiratorios como tos o congestión, pero sí fiebre alta, dolores musculares y erupción cutánea.",
    "pruebas para detectar el dengue": "Las pruebas más comunes son la detección de antígenos NS1, pruebas serológicas (IgM e IgG) y la PCR para identificar el virus.",
    "medicamentos para el dengue": "No hay antivirales específicos. Se recomienda paracetamol para la fiebre y evitar antiinflamatorios como ibuprofeno o aspirina, ya que pueden aumentar el riesgo de sangrado.",
    "el dengue se puede tratar en casa": "Los casos leves pueden tratarse en casa con hidratación y descanso, pero los casos graves requieren hospitalización.",
    "alimentacion durante el dengue": "Se recomienda ingerir líquidos, sopas, frutas ricas en vitamina C y alimentos de fácil digestión. Evitar comidas pesadas y bebidas con cafeína.",
    "dengue deja inmunidad": "Sí, pero solo contra el serotipo con el que te infectaste. Puedes volver a enfermar con otro serotipo.",
    "mitos sobre el dengue": "Algunos mitos son: 'el dengue solo afecta a los pobres', 'las plantas de citronela eliminan los mosquitos', y 'la vitamina B previene el dengue'.",
    "dengue y cambio climatico": "El cambio climático influye en la propagación del dengue al aumentar la temperatura y la humedad, favoreciendo la reproducción de los mosquitos.",
    "como reportar criaderos de mosquitos": "Puedes reportarlos a las autoridades de salud locales o municipales, quienes suelen tener programas de control de vectores.",
    "vacuna contra el dengue": "Existen vacunas como la Dengvaxia y Qdenga, pero solo se recomiendan en ciertos casos y para personas que ya han tenido dengue antes.",
    "drones contra el dengue": "Los drones pueden ser utilizados para identificar criaderos de mosquitos en zonas inaccesibles y aplicar larvicidas de manera eficiente.",
    "big data y dengue": "El uso de Big Data permite analizar patrones de propagación, predecir brotes y mejorar las estrategias de prevención y control.",
    "dengue en el mundo": "El dengue afecta a más de 100 países, con mayor incidencia en América Latina, el Sudeste Asiático y algunas regiones de África.",
    "dengue afecta mas a hombres o mujeres": "No hay diferencias significativas en la infección, pero algunos estudios sugieren que las mujeres pueden ser más propensas a síntomas graves.",
    "impacto economico del dengue": "El dengue genera costos en atención médica, pérdida de productividad y control del vector, afectando significativamente la economía de los países afectados.",
    "el dengue puede convertirse en pandemia": "No, el dengue es una epidemia recurrente en regiones tropicales, pero no cumple con los criterios de una pandemia global.",
    "redes sociales y prevencion del dengue": "Las redes sociales pueden ayudar a difundir información sobre prevención, reportar criaderos y alertar sobre brotes en tiempo real."
};

function responderPregunta(pregunta) {
    // Limpiar la pregunta
    const preguntaLimpia = pregunta.toLowerCase()
        .replace(/[^\w\s]/g, '')  // Eliminar signos de puntuación
        .replace(/\s+/g, ' ')     // Eliminar espacios extra
        .trim();

    // Definir conjuntos de palabras clave
    const conjuntosPalabras = [
        { palabras: ["sintomas", "dengue"], respuesta: "sintomas del dengue" },
        { palabras: ["como", "transmite"], respuesta: "como se transmite" },
        { palabras: ["como", "prevenir"], respuesta: "como prevenir" },
        { palabras: ["lugares", "riesgo"], respuesta: "lugares de riesgo" },
        { palabras: ["ir", "medico"], respuesta: "cuando ir al medico" },
        { palabras: ["tipos", "dengue"], respuesta: "tipos de dengue" },
        { palabras: ["dengue", "clasico", "grave"], respuesta: "diferencia entre dengue clasico y grave" },
        { palabras: ["organos", "afectados"], respuesta: "organos afectados" },
        { palabras: ["dengue", "mortal"], respuesta: "dengue es mortal" },
        { palabras: ["evolucion", "cuerpo"], respuesta: "evolucion del dengue en el cuerpo" },
        { palabras: ["cuanto", "dura"], respuesta: "cuanto dura el dengue" },
        { palabras: ["mosquito", "transmite"], respuesta: "mosquito que transmite el dengue" },
        { palabras: ["contagia", "personas"], respuesta: "el dengue se contagia entre personas" },
        { palabras: ["veces", "dengue"], respuesta: "cuantas veces se puede tener dengue" },
        { palabras: ["dengue", "gripe"], respuesta: "dengue o gripe" },
        { palabras: ["pruebas", "detectar"], respuesta: "pruebas para detectar el dengue" },
        { palabras: ["medicamentos", "dengue"], respuesta: "medicamentos para el dengue" },
        { palabras: ["tratar", "casa"], respuesta: "el dengue se puede tratar en casa" },
        { palabras: ["alimentacion", "dengue"], respuesta: "alimentacion durante el dengue" },
        { palabras: ["dengue", "inmunidad"], respuesta: "dengue deja inmunidad" },
        { palabras: ["mitos", "dengue"], respuesta: "mitos sobre el dengue" },
        { palabras: ["cambio", "climatico"], respuesta: "dengue y cambio climatico" },
        { palabras: ["reportar", "criaderos"], respuesta: "como reportar criaderos de mosquitos" },
        { palabras: ["vacuna", "dengue"], respuesta: "vacuna contra el dengue" },
        { palabras: ["drones", "dengue"], respuesta: "drones contra el dengue" },
        { palabras: ["big", "data"], respuesta: "big data y dengue" },
        { palabras: ["dengue", "mundo"], respuesta: "dengue en el mundo" },
        { palabras: ["dengue", "genero"], respuesta: "dengue afecta mas a hombres o mujeres" },
        { palabras: ["impacto", "economico"], respuesta: "impacto economico del dengue" },
        { palabras: ["dengue", "pandemia"], respuesta: "el dengue puede convertirse en pandemia" },
        { palabras: ["redes", "sociales", "prevencion"], respuesta: "redes sociales y prevencion del dengue" },
        { palabras: ["tratamiento"], respuesta:"tratamiento"},
    ];

    // Buscar coincidencias de conjuntos de palabras
    for (let conjunto of conjuntosPalabras) {
        // Verificar si todas las palabras del conjunto están en la pregunta
        if (conjunto.palabras.every(palabra => preguntaLimpia.includes(palabra))) {
            return preguntas[conjunto.respuesta];
        }
    }

    // Búsqueda de respuesta por palabras individuales si no se encuentra conjunto
    let mejorRespuesta = "Lo siento, no tengo información específica sobre esa pregunta. ¿Puedes reformularla?";
    let mejorCoincidencias = 0;

    for (let key in preguntas) {
        // Cuenta cuántas palabras de la clave están en la pregunta
        const palabrasClave = key.split(' ');
        const coincidencias = palabrasClave.filter(palabra => 
            preguntaLimpia.includes(palabra)
        ).length;

        // Actualiza la mejor respuesta si hay más coincidencias
        if (coincidencias > mejorCoincidencias) {
            mejorRespuesta = preguntas[key];
            mejorCoincidencias = coincidencias;
        }
    }

    return mejorRespuesta;
}

function agregarMensaje(mensaje, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add(tipo);
    mensajeDiv.textContent = mensaje;
    chatMessages.appendChild(mensajeDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendButton.addEventListener('click', enviarMensaje);
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        enviarMensaje();
    }
});

function enviarMensaje() {
    const mensaje = messageInput.value.trim();
    if (mensaje) {
        agregarMensaje(mensaje, 'user-message');
        const respuesta = responderPregunta(mensaje);
        setTimeout(() => {
            agregarMensaje(respuesta, 'bot-message');
        }, 500);
        messageInput.value = '';
    }
}