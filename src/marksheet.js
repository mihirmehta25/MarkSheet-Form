import { useState } from "react";

function StudentMarks() {

    const [m1, setMarks1] = useState();
    const [m2, setMarks2] = useState();
    const [m3, setMarks3] = useState();
    const [tot, setTot] = useState();
    const [average, setAvg] = useState();
    const [gradee, setGrade] = useState();
    var total;
    var grade;
    var avg;

    function handleClick() {
        total = Number(m1) + Number(m2) + Number(m3);
        setTot(total);

        avg = Number(total / 3);
        setAvg(avg);

        if (avg > 70) {
            grade = "A"
        }
        else if (avg > 50) {
            grade = "B"
        }
        else if (avg > 35) {
            grade = "C"
        }
        else {
            grade = "F"
        }

        setGrade(grade);
    }

    return (
        <div class="container">
            <br />

            <h1>Student Marks Calculation</h1>
            <br />

            <div>
                <label>Marks 1</label>
                <input type="text" name="m1" placeholder="Marks1" class="form-control" onChange={(event) => {
                    setMarks1(event.target.value);
                }} />
            </div> <br />

            <div>
                <label>Marks 2</label>
                <input type="text" name="m2" placeholder="Marks2" class="form-control" onChange={(event) => {
                    setMarks2(event.target.value);
                }} />
            </div> <br />

            <div>
                <label>Marks 3</label>
                <input type="text" name="m3" placeholder="Marks3" class="form-control" onChange={(event) => {
                    setMarks3(event.target.value);
                }} />
            </div> <br />

            <div>
                <label>Total</label>
                <input type="text" class="form-control" value={tot} />
            </div>

            <div>
                <label>Average</label>
                <input type="text" class="form-control" value={average} />
            </div>

            <div>
                <label>Grade</label>
                <input type="text" class="form-control" value={gradee} />
            </div>

            <button onClick={handleClick} class="btn btn-warning mt-4"> Click Me</button>
        </div>
    );
}

export default StudentMarks;