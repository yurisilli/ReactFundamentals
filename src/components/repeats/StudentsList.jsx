import { React } from "react";
import students from "../../data/students";

const StudentsList = (props) => {
    const studentsListItens = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}) <strong>{student.name}</strong> - {student.score}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: "none" }}>{studentsListItens}</ul>
        </div>
    );
};

export default StudentsList;
