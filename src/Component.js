// const Component = (props)=>{
// const string = props.string
// const number = props.number

// const Component = ({string, number})=>{
//     const string = string
//     const number = number

// const Component = (props)=>{
//     const {string,number}= props

//Det här är vanligt sätt, hämtar props objekter ex)string,number
//grund react strunktur
const Component = ({string,number})=>{

    return(
        <div>
            <p>
            {string + number}
            </p>
        </div>
    )
}

export default Component;