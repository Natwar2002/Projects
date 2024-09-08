function Button ({ onclick, children }) {
    return (
        <button 
            onClick={onclick}
            style={{backgroundColor : 'blue', color: "white", padding: '10px 20px', border: 'none'}}
        >
            {children}
        </button>
    );
}

export default Button;