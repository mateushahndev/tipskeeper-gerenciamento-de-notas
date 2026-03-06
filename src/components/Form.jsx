export default function Form(props) {

    return (
        <form>
            <div className="container-form">
                <input onChange={props.onChange} value={props.titleValue} type="text" placeholder='Título da Nota' name={props.nameTitle} id={props.nameTitle} />
                <textarea onChange={props.onChange} value={props.contentValue} rows="3" cols="36" placeholder='Descrição da Nota' name={props.nameContent} id={props.nameContent}></textarea>
                <button onClick={props.onClick}>+</button>
            </div>
        </form>
    )
}