import React, { useEffect } from "react";
import { assign, Machine } from "xstate";
import { useMachine, useService } from "@xstate/react/lib";

import Todos from "../components/todos";
import "../style/main.css";
import "./style.css";

const fetchProducts = () => {
  return Promise.resolve([
    {
      name: "Cheese",
      price: 250,
    },
    {
      name: "Crisps",
      price: 300,
    },
    {
      name: "Pizza",
      price: 420,
    },
  ]);
};

const productMachine = Machine({
  id: "product",
  initial: "loading",
  context: {
    productCategory: undefined,
    products: [],
  },
  states: {
    loading: {
      invoke: {
        src: (ctx) => fetchProducts(),
        onDone: {
          target: "selecting",
          actions: assign({
            products: (ctx, event) => {
              return event.data.map((e) => {
                return {
                  ...e,
                  quantity: 0,
                };
              });
            },
          }),
        },
      },
    },
    selecting: {
      on: {
        ADD: {
          actions: assign({
            products: (ctx, event) => {
              return ctx.products.map((e) => {
                return {
                  ...e,
                  quantity:
                    e.name === event.data.name ? e.quantity + 1 : e.quantity,
                };
              });
            },
          }),
        },
        REMOVE: {
          actions: assign({
            products: (ctx, event) => {
              return ctx.products.map((e) => {
                return {
                  ...e,
                  quantity:
                    e.name === event.data.name ? e.quantity - 1 : e.quantity,
                };
              });
            },
          }),
        },
        DONE: "finished",
      },
    },
    finished: {
      type: "final",
      data: (ctx) => {
        return {
          selectedProducts: ctx.products.filter((e) => e.quantity > 0),
        };
      },
    },
  },
});

const checkoutMachine = Machine({
  id: "checkout",
  initial: "idle",
  context: {
    productCategory: undefined,
    selectedProducts: undefined,
  },
  states: {
    idle: {
      on: {
        INIT: {
          target: "product",
          actions: assign({
            productCategory: (ctx, event) => event.data.productCategory,
          }),
        },
      },
    },
    product: {
      invoke: {
        id: "productMachine",
        src: productMachine,
        data: {
          productCategory: (ctx) => ctx.productCategory,
          products: [],
        },
        onDone: {
          target: "shipping",
          actions: assign({
            selectedProducts: (ctx, event) => event.data.selectedProducts,
          }),
        },
      },
    },
    shipping: {
      on: {
        DONE: "payment",
      },
    },
    payment: {
      on: {
        DONE: "confirmation",
      },
    },
    confirmation: {
      type: "final",
    },
  },
});

const CheckoutApp = ({ productCategory }) => {
  const machine = useMachine(checkoutMachine);

  const [state, transition, interpreter] = machine;

  useEffect(() => {
    transition("INIT", {
      data: {
        productCategory: "food",
      },
    });
  }, [transition]);

  // useEffect(() => {
  //   interpreter
  //     .onTransition((state) => console.log("PARENT TRANSITION", state))
  //     .onEvent((event) => console.log("PARENT EVENT", event));
  // }, [interpreter]);

  return (
    <React.Fragment>
      {state.matches("product") && <ProductPicker machine={machine} />}
    </React.Fragment>
  );
};

const ProductPicker = ({ machine }) => {
  const [parentState, parentTransition, parentInterpreter] = machine;
  const [state, transition, interpreter] = useService(
    parentInterpreter.children.get("productMachine")
  );

  // useEffect(() => {
  //   interpreter
  //     .onTransition((state) => console.log("PRODUCT TRANSITION", state))
  //     .onEvent((event) => console.log("PRODUCT EVENT", event));
  // }, [interpreter]);

  const { productCategory, products } = state.context;

  console.log(parentState.value, state.value);

  return (
    <div>
      <h1>{productCategory}</h1>

      {products.map((e) => {
        return (
          <div key={e.name}>
            <h2>{e.name}</h2>
            <span>{e.quantity}</span>
            <button onClick={() => transition("ADD", { data: e })}>+</button>
            {e.quantity > 0 && (
              <button onClick={() => transition("REMOVE", { data: e })}>
                -
              </button>
            )}
          </div>
        );
      })}

      <button onClick={() => transition("DONE")}>Continue</button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="">
      <CheckoutApp />
      <Todos />
    </div>
  );
};

export default Home;
