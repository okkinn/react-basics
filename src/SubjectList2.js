import { useState } from "react";

export default function SubjectList2(props){
    const subjectlist = props.list;
    const [subjects, setSubjects] = useState(subjectlist);
    
    function addSubject() {
        setSubjects((subjects) => {
            const nval = [...subjects, { code: "CMSC23", description: "Mobile Development" }];
            console.log(nval);
            return nval;
        });
    }

    return (
        <>
            <p>Show list: </p>
            <ol>
                {
                    subjects.map((subject)=>{
                        return <li>{subject.code} - {subject.description}</li>
                    })
                }
            </ol>
        <button onClick={addSubject}>Add Subject</button>
        </>
    );
}