form = document.querySelector('#input-form');
ranges = {
    'day': [1, 31],
    'month': [1, 12],
    'year': [1, 9999]
};

function lazyTest(func, values, expected) {
    errors = [];
    for (i = 0; i < values.length; i++) {
        if (func(values[i]) != expected[i]) errors.push(values[i]);
    };
    console.log(func.name, 'test:', errors);
}

function checkValidDate(input) {
    return input instanceof Date && !isNaN(input.valueOf())
}

function formToDate(entries) {
    temp = [];
    // formData.entries() can't be toReversed()
    for (const value of entries) temp.unshift(Number(value));
    return new Date(temp.join('-'));
}

function showError(node, text='') {
    document.querySelector(`#cont-${node} .label`).classList.add('error');
    document.querySelector(`#cont-${node} .field`).classList.add('error');
    document.querySelector(`#cont-${node} .hint`).innerText = text;
}

function checkValidity(node, value) {
    if (value === "") {
        console.log(`Form validation error: ${node} is empty`);
        showError(node, 'This field is required');
        return false;
    };
    const current = Number(value);
    if (isNaN(current)) {
        console.log(`Form validation error: ${node} is NaN - ${value}`);
        showError(node, `Must be a valid ${node}`);
        return false;
    }
    const tooLow = current < ranges[node][0];
    const tooHigh = current > ranges[node][1];
    if (tooLow||tooHigh) {
        console.log(`Form validation error: ${node} OoR - ${value}`);
        showError(node, `Must be a valid ${node}`);
        return false;
    }
    return true;
}

function checkValidityAll(formData) {
    results = [];
    for (let [node, value] of formData.entries()) results.push(checkValidity(node, value));
    return results.reduce((accumulator, current) => accumulator && current, true)
}

form.addEventListener('submit', e => {
    e.preventDefault();
    let formData = new FormData(form);
    console.log(formData);
    document.querySelectorAll('.label').forEach(node => {node.classList.remove('error')});
    document.querySelectorAll('.field').forEach(node => {node.classList.remove('error')});
    document.querySelectorAll('.hint').forEach(node => {node.innerText = ''});

    // lazyTest(checkValidDate, 
    //     ['', 0, '123', 123, new Date('2022-02-31'), new Date(2022, 01, 01), new Date()], 
    //     [false, false, false, false, false, true, true]
    // );

    if (!checkValidityAll(formData)) return;

    let dateEntered = formToDate(formData.values());
    console.log(dateEntered);
    if (!checkValidDate(dateEntered)) {
        console.log(`Form validation failed: invalid date`);
        showError('day', 'Must be a valid date');
        showError('month');
        showError('year');
        return;
    };

    if (dateEntered > new Date()) {
        console.log(`Form validation failed: future date`);
        showError('day', 'Must be a date in the past');
        showError('month');
        showError('year');
        return;
    };

    let age = moment().subtract({
        days: dateEntered.getDate(),
        months: dateEntered.getMonth() + 1,
        years: dateEntered.getFullYear()
    });
    document.querySelector('#output-year').textContent = age.format("YY");
    document.querySelector('#output-month').textContent = age.format("M");
    document.querySelector('#output-day').textContent = age.format("D");
})