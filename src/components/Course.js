import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";
import UserForm from "./FormComponents/UserForm";
import Success from "./FormComponents/Success";

const Course = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...props} />
      <div className="title-spacer m-0">
        {props.loggedInStatus === "LOGGED_IN" ? (
          <Success name={props.user.user_name} action="course" />
        ) : (
          <>
            <div className="center pt">
              <div className="course-description ">
                <h2 className="center">Los 5 Pilares para Bajar de peso.</h2>
                <p>
                  Sabemos que muchas veces te has preguntado que estás haciendo
                  mal o porque otros obtienen resultados y tú no. Es por esto
                  que en esta master class iremos desarrollando (de la teoría a
                  la práctica), los 5 pilares para bajar de peso.
                </p>
                <p>
                  Cada individuo es diferente, pero nuestro ecosistema del
                  cuerpo se contenta bajo la misma fisiología y ante ello
                  deseamos aprovechar al máximo este encuentro para que indagues
                  dentro de ti mismo y te preguntes: ¿realmente he hecho cambios
                  sustanciales o solo en la superficialidad?, ¿Por cuánto tiempo
                  he mantenido estos cambios? ¿Por qué vuelvo a caer en los
                  mismos malos hábitos?, ¿Hay algo que me ate a mi pasado o
                  futuro?, ¿Realmente como porque tengo hambre o es ansiedad?
                  Tienes una mente que no para de hablarte y quieres callarla.
                </p>
                <p>
                  Este curso de 3 horas estará enfocado en las necesidades de tu
                  Yo actual en tiempos de pandemia, por lo que abarcaremos los
                  siguientes pilares:
                </p>
                <ol>
                  <li>Alimentación y Ayuno.</li>
                  <li>Actividad física. </li>
                  <li>Mindfullness.</li>
                  <li>Calidad del Sueño. </li>
                  <li>Cerebro y Hábitos. </li>
                </ol>
                <p>
                  Te enseñaremos a identificar cuáles son las variables que
                  debes manejar para mejorar tus hábitos y lograr tus
                  propósitos. Haremos una lista de trabajo metodológica de tal
                  forma que estos cambios sean progresivos para que sean
                  exitosos y perduren en el tiempo.
                </p>
                <p>
                  El peso que indica la balanza es tan solo una cifra. Tú eres
                  más que ese número y este no define tu persona. Es por esto
                  que te guiaremos en donde fijar tu atención plena para que
                  puedas visualizar resultados sin siquiera esperarlos.
                </p>
                <p>
                  Queremos mostrarte este camino de transformación de manera
                  real, empática y auténtica para que puedas sentirte a gusto
                  contigo mismo/a durante todo el proceso, sin juzgar ni
                  presionar.
                </p>
                <p>
                  Hoy es el día de tomar decisiones y comenzar a tomar las
                  riendas de tu vida y salud.
                </p>
                <p>
                  Si tienes alguna interrogante particular que quieras que
                  resolvamos en este curso, puedes irlas enviando al correo
                  retoatma@gmail.com. Desde ya estaremos trabajando conectados
                  contigo.
                </p>
              </div>
              <UserForm action="course" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
