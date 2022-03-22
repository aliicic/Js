console.log("first step");

function getData(callback) {
  setTimeout(() => {
    console.log("hello");
    callback({
      name: "ali",
      last: "aghakhani",
      age: "27",
    });
  }, 3000);
}

function getmarks(name, callback) {
  const data = [
    {
      name: "ali",
      marks: [20, 11, 12, 16, 17, 20],
    },
    {
      name: "reza",
      marks: [10, 20, 20, 20, 20, 10],
    },
    {
      name: "hamid",
      marks: [10, 20, 20, 20, 20, 10],
    },
  ];
  setTimeout(() => {
    callback(
      data.find((item) => {
        if (item.name === name) {
          return item;
        }
      }).marks
    );
  }, 2000);
}

const data = getData((data) => {
  console.log(data);
  const marks = getmarks(data.name, (marks) => {
    console.log(marks);
  });
});

console.log("second step");
