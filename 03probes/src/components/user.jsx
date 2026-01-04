import './user.css';

function User({ name, age, profession }){
return (
    <div className="user-card">
        <h2>{name}</h2>
        <p>Age : {age}</p>
        <p>profession : {profession} </p>
    </div>
);
}

export default User;