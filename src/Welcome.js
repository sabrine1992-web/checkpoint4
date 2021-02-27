 

    export const Welcome = props => {
        console.log(`props:`, props.name);
        return (
            <button onClick={() => props.alertMyInput(`My name is sabrine saada `)}>
            ClickMe
          </button>
        );
       };