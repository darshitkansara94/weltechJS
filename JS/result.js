function result() {
    let txtStudent1 = document.getElementById('txtStudent1');
    let txtStudent2 = document.getElementById('txtStudent2');

    let txtStudent1Result = document.getElementById('txtStudent1Result');
    let txtStudent2Result = document.getElementById('txtStudent2Result');

    if (txtStudent1.value < 35) {
        // Fail
        txtStudent1Result.classList.add('fail');
        txtStudent1Result.classList.remove('pass');        

        txtStudent1Result.value = 'Fail';
    }
    else {
        // pass
        txtStudent1Result.classList.add('pass');
        txtStudent1Result.classList.remove('fail');
        
        txtStudent1Result.value = 'Pass';
    }

    if (txtStudent2.value < 35) {
        //fail
        txtStudent2Result.className = 'fail';
        txtStudent2Result.value = 'Fail';
    }
    else {
        //pass
        txtStudent2Result.className = 'pass';
        txtStudent2Result.value = 'Pass';
    }
}