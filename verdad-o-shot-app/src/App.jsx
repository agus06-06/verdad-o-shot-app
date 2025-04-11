
import React, { useState } from "react";
import "./App.css";

const truths = [
  "¿Qué parte de tu cuerpo te gusta más?",
  "¿Qué cosa loca te gustaría probar en la intimidad?",
  "¿Qué te excita más sin que yo haga nada?",
  "¿Te animás a contar una fantasía tuya conmigo?",
  "¿Hay algo que siempre quisiste que hiciéramos pero no te animaste a pedir?",
  "¿Qué te imaginaste la primera vez que me viste?",
  "¿Alguna vez soñaste algo subido de tono y no me lo contaste?",
  "¿Cuál fue el mejor beso que tuvimos hasta ahora?",
  "Si tuvieras que describirme como una bebida… ¿cuál serías y por qué?",
  "¿Qué parte mía mirás más seguido (aunque no lo diga)?",
  "¿Qué prenda mía te gusta más cuando la uso?",
  "¿Cuál es tu pensamiento más atrevido en una cita conmigo?",
  "¿Qué te gustaría que hiciera más seguido en la cama?",
  "¿Te animás a decirme algo que nunca te dijiste a vos mismo en voz alta?",
  "¿Tenés alguna fantasía con un lugar público?",
  "¿Qué cosa mía te vuelve loco/a aunque sea pequeña?",
  "¿Qué palabra o frase te enciende más cuando te la digo?",
  "¿Qué tipo de caricias te gustan más y dónde?",
  "¿Qué parte mía besarías ahora mismo?",
  "¿Te animás a describirme tu plan ideal para una noche conmigo sin censura?"
];

const dares = [
  "Mandame un mensaje hot sin usar las palabras 'sexo' ni 'beso'.",
  "Haceme un masaje de 1 minuto con los ojos vendados.",
  "Decime al oído algo que te gustaría que pasara esta noche.",
  "Usá tu mejor voz sexy y decime lo que querés ahora mismo.",
  "Inventá un apodo hot para mí y usalo el resto del juego.",
  "Borrá un ítem de ropa... o tomás dos tragos.",
  "Decime cuál es tu parte favorita de mi cuerpo... sin usar palabras, solo con las manos.",
  "Enviame un emoji que represente lo que querés que pase cuando termine este juego 😏.",
  "Tenés que besarme en un lugar no tradicional (ni boca, ni cuello).",
  "Bailá para mí como si fuera una escena de película, al menos 30 segundos.",
  "Imitá cómo sería una escena hot de telenovela usando mi nombre.",
  "Haceme un halago súper cursi como si fueras un poeta medieval.",
  "Contame un sueño inventado que termina con nosotros dos juntos en un lugar inesperado.",
  "Pasame hielo por alguna parte del cuerpo... lentamente.",
  "Actuá como si fueras un personaje sexy por 1 minuto (puede ser famoso o inventado).",
  "Inventá una escena romántica improvisada y actuála conmigo.",
  "Tocáme el hombro, cuello o brazo mientras me mirás sin decir nada durante 20 segundos.",
  "Susurrame una historia inventada hot en 3 frases.",
  "Imitá tu sonido de placer... sin reírte.",
  "Tenés que obedecer cualquier pedido mío durante 1 minuto."
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function App() {
  const [currentPrompt, setCurrentPrompt] = useState("");

  return (
    <div className="app-container">
      <h1>Verdad o Shot 🔥</h1>
      <div className="card">{currentPrompt || "Presioná un botón para empezar..."}</div>
      <div className="buttons">
        <button onClick={() => setCurrentPrompt(getRandomItem(truths))}>Verdad</button>
        <button onClick={() => setCurrentPrompt(getRandomItem(dares))}>Reto</button>
      </div>
    </div>
  );
}

export default App;
