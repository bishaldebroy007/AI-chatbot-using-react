import { createContext } from "react";
import PropTypes from 'prop-types';
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const onSent = async (props) => {
        await run(props)
    }

    onSent("What is react js");

    const contextValue = {
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextProvider;

// Source Code:
// import { createContext } from "react";
// export const Context = createContext();

// const ContextProvider = (props) => {
//      const contextValue = {
//      }

//      return (
//          <Context.Provider value={contextValue}>
//              {props.children}
//          </Context.Provider>
//      )
// }
