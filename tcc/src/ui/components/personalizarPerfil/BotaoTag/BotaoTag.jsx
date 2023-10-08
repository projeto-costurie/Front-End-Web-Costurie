import React from 'react'
import "./styleBotaoTag.css"
import { useState} from 'react'

function BotaoTag({onClick, text, option, setValue, array}) {


    const [tagAtiva, setTagAtiva] = useState(false)

    const valueTag = () => {
        if(tagAtiva == true) {
            return true
        } else {
            return false
        }
    }

    const setTag = () => {
        option(tagAtiva)
        valueTag()
        setTagAtiva(!tagAtiva)
    }

    if (tagAtiva == false) {
        return(
            <>
                  <div onClick={() => {
                    setTag()
                }} className={"botaoTag"}>
                    <p>{text}</p>
                </div>

                
            </>
        )
    } else {
        return(
            <>
              {/* <div onClick={() => {
                    setTag()
                }} className={"botaoTagAtivo"}>
                    <p>{text}</p>
                </div> */}
            </>
        )
    }
}

export default BotaoTag