.rightSection {
    background-color: var(--col2);
    height: 100vh;
    padding: 0px 20px;
    justify-content: space-between;
    position: relative;
}
.schoolbg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
}

.rightin{
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
}
.chatgptversion {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 10%;
    color: var(--textcol);
    font-size: 25px;
    gap: 10px;
    z-index: 2;

}

.chatgptversion svg {
    width: 20px;
    height: 20px;
    z-index: 2;

}


.nochat {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: var(--textcol);
    font-size: 25px;
    height: 70%;
    position: relative;
}

.nochat .s1 {
    display: flex;
    gap: 10px;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

}

.nochat .s1 h1 {
    font-size: 30px;
    font-weight: 400;
}

.nochat .s2 {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    gap: 20px;
    justify-content: center;
}

.nochat .suggestioncard {
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 10px;
    width: 400px;
    border-radius: 10px;

}

.nochat .suggestioncard h2 {
    font-size: 20px;
    font-weight: 400;

}

.nochat .suggestioncard p {
    font-size: 16px;
    font-weight: 400;
    color: gray;
}

.bottomsection {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    z-index: 10;

}


.bottomsection svg {
    width: 25px;
    height: 25px;
    background-color: gray;
    padding: 5px;
    border-radius: 5px;
}


.bottomsection svg:hover {
    cursor: pointer;
    background-color: white;
}

.bottomsection .messagebar {
    border: 1px solid gray;
    align-items: center;
    display: flex;
    padding: 15px;
    border-radius: 10px;
    justify-content: space-between;
    width: 80%;
}

.bottomsection .messagebar input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    color: var(--textcol);
    width: 100%;
}

.messages{
    height: 70%;
    width: 100%;
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    overflow: auto;
}


.messages .message{
    display: flex;
    gap: 10px;
}

.messages .message img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
}

.messages .message div {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.messages .message div h2{
    color: var(--textcol);
    font-size: 20px;
    font-weight: 500;
    margin-top: 5px;
}


.messages .message div p{
    color: var(--textcol);
    font-size: 15px;
    max-width: 1000px;
}


.bottomsection p{
    color: goldenrod;
}
