import React, { Component } from "react";
// import Form from "../components/form";
import Todos from "../components/todos";
import Footer from "../components/footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Todos />
        <Footer />
      </div>
    );
  }
}

export default Home;

// import React, { useState, useMemo, useEffect } from "react";
// import { Machine, interpret, assign } from "xstate";

// function useMachine(machine) {
//   const [current, setCurrent] = useState(machine.initialState);

//   const service = useMemo(
//     () =>
//       interpret(machine)
//         .onTransition((state) => {
//           if (state.changed) {
//             setCurrent(state);
//           }
//         })
//         .start(),
//     []
//   );

//   useEffect(() => {
//     return () => service.stop();
//   }, []);

//   return [current, service.send];
// }

// function fakePayment() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("pagamento realizado"), 2500);
//   });
// }

// const stateMachine = Machine({
//   initial: "idle",
//   context: {
//     msg: "",
//   },
//   states: {
//     idle: {
//       on: {
//         SUBMIT: [
//           {
//             target: "loading",
//             cond: (context, event) => {
//               return event.data.name !== "" && event.data.card !== "";
//             },
//           },
//           {
//             target: "error",
//           },
//         ],
//       },
//     },
//     loading: {
//       invoke: {
//         id: "doPayment",
//         src: () => fakePayment(),
//         onDone: {
//           target: "success",
//           action: assign({
//             msg: (ctx, event) => {
//               console.log(event);
//               return event.data;
//             },
//           }),
//         },
//         onError: {
//           target: "error",
//           action: assign({
//             msg: (ctx, event) => {
//               console.log(event);
//               return event.data;
//             },
//           }),
//         },
//       },
//     },
//     error: {
//       on: {
//         SUBMIT: [
//           {
//             target: "loading",
//             cond: (context, event) => {
//               return event.data.name !== "" && event.data.card !== "";
//             },
//           },
//         ],
//       },
//     },
//     success: {
//       type: "final",
//     },
//   },
// });

// const App = () => {
//   const [machine, send] = useMachine(stateMachine);
//   const [form, updateForm] = useState({
//     name: "",
//     card: "",
//   });

//   console.log(machine.value);

//   return (
//     <div>
//       <div>
//         <h2>State Machine Payment</h2>
//       </div>

//       {machine.matches("error") ? (
//         <div>{machine.context.msg}</div>
//       ) : (
//         <div>{machine.context.msg}</div>
//       )}

//       <div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             send({ type: "SUBMIT", data: { ...form } });
//           }}
//         >
//           <div>
//             <label>name on card</label>
//             <input
//               type="text"
//               id="nameOnCard"
//               maxLength="255"
//               value={form.name}
//               onChange={(e) => updateForm({ ...form, name: e.target.value })}
//             />
//           </div>
//           <div>
//             <label>card number</label>
//             <input
//               type="text"
//               id="creditCardNumber"
//               value={form.card}
//               onChange={(e) => updateForm({ ...form, card: e.target.value })}
//             />
//           </div>
//           <button type="submit" id="payButton">
//             <span>pay now</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;
