import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");


    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)

        const response = await run(input)
        setResultData(response);
        setLoading(false);
        setInput("")
    }

    // onSent("What is react js");

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,

        setShowResult,
        setLoading,
        setResultData
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
