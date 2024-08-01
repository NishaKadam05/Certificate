const theoryElements = [
    document.querySelector(".theory1"),
    document.querySelector(".theory2"),
    document.querySelector(".theory3"),
    document.querySelector(".theory4"),
    document.querySelector(".theory5"),
  ];
  
  const practicalElements = [
    document.querySelector(".practical1"),
    document.querySelector(".practical2"),
    document.querySelector(".practical3"),
    document.querySelector(".practical4"),
    document.querySelector(".practical5"),
  ];
  
  const totalElements = [
    document.querySelector(".total1"),
    document.querySelector(".total2"),
    document.querySelector(".total3"),
    document.querySelector(".total4"),
    document.querySelector(".total5"),
  ];
  
  const totalTotal = document.querySelector(".total-total");
  
  function calculateTotal() {
    let totalVal = 0;
    totalElements.forEach((totalElement) => {
      totalVal += parseInt(totalElement.innerHTML) || 0;
    });
    totalTotal.innerHTML = totalVal;
    updateResult(totalVal);
  }
  
  function handleInput(index) {
    return function (e) {
      const theoryValue = Number(e.target.value) || 0;
      const practicalValue = Number(practicalElements[index].value) || 0;
      totalElements[index].innerHTML = theoryValue + practicalValue;
      calculateTotal();
    };
  }
  
  function handlePracticalInput(index) {
    return function (e) {
      const practicalValue = Number(e.target.value) || 0;
      const theoryValue = Number(theoryElements[index].value) || 0;
      totalElements[index].innerHTML = theoryValue + practicalValue;
      calculateTotal();
    };
  }
  
  theoryElements.forEach((theoryElement, index) => {
    theoryElement.addEventListener("input", handleInput(index));
  });
  
  practicalElements.forEach((practicalElement, index) => {
    practicalElement.addEventListener("input", handlePracticalInput(index));
  });
  
  function updateResult(total) {
    const result = document.querySelector(".result");
    const percentage = document.querySelector(".percentage");
    const grade = document.querySelector(".grade");
  
    result.innerHTML = total < 290 ? "Fail" : "Pass";
  
    let per = (total / 5).toFixed(2);
    percentage.innerHTML = per + "%";
  
    if (per >= 90) {
      grade.innerHTML = "A+";
    } else if (per >= 80) {
      grade.innerHTML = "A";
    } else if (per >= 70) {
      grade.innerHTML = "B";
    } else if (per >= 60) {
      grade.innerHTML = "C";
    } else {
      grade.innerHTML = "F";
    }
  }
  