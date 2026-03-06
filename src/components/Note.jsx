import DeleteIcon from '@mui/icons-material/DeleteForever';
import Fab from '@mui/material/Fab';

export default function Note(props) {
    return (
        <div key={props.key} className="note">
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="content">
                <p>{props.content}</p>
            </div>
            <div className="btn">
                <Fab color="error" onClick={() => props.onClick(props.id)}>
                    <DeleteIcon />
                </Fab>
            </div>
        </div>
    )
}