import  { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
  
  body{
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    background-image: ${(props) => props.theme.bodyBackgroundImage};
    background-repeat: ${(props) => props.theme.bodyBackgroundRepeat};
    background-size: ${(props) => props.theme.bodyBackgroundSize};
  }

  #create-todo-input{
    background-color: ${(props) => props.theme.inputBackgroundColor};
    color: ${(props) => props.theme.inputColor};
  }

  .each-task{
    background-color: ${(props) => props.theme.tasksBackgroundColor};
    color: ${(props) => props.theme.tasksColor};
    border-bottom: ${(props) => props.theme.tasksBorderBottom};
    border-bottom: ${(props) => props.theme.tasksBorderBottom};
   
  }

  .regular-checkbox{
    &:not(:checked):hover{
        box-shadow: ${(props) => props.theme.checkboxBoxshadow};   
    }
    :checked ~ p{
      color: ${(props) => props.theme.textColorAfterchecked}
    }
  }

  .li-cross-mark{
    :after{
      color: ${(props) => props.theme.crossColor}
    }
  }

  
  [id^="last-li"]{
    color: ${(props) => props.theme.lastLiColor}
  }

  #all, #active, #completed, #clear{
    :hover{
      color: ${(props) => props.theme.lastLiHoverColor}
    }
  }

`;


export default GlobalStyle;