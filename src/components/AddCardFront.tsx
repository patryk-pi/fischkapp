import styles from "./AddCardFront.module.css";

type AddCardFrontProps = {
    question: string;
    setQuestion: React.Dispatch<React.SetStateAction<string>>;
};

export const AddCardFront = ({ question, setQuestion }: AddCardFrontProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(e.target.value);
    };

    const resizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <>
            <form action="submit">
                <textarea
                    name="question"
                    rows={1}
                    className={styles.textarea}
                    onInput={resizeTextArea}
                    onChange={handleInputChange}
                    value={question}
                    placeholder="Type your text here..."
                ></textarea>
            </form>
        </>
    );
};
