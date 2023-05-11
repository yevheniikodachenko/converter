const dis = {
  m: {
    m: 1,
    cm: 100,
    in: 39.37,
    ft: 3.28,
    mm: 1000,
    yd: 1.09,
    km: 0.001,
    mi: 0.00062,
  },
  cm: {
    m: 0.01,
    cm: 1,
    in: 0.39,
    ft: 0.03,
    mm: 10,
    yd: 0.01,
    km: 0.00001,
    mi: 0.0000062,
  },
  in: {
    m: 0.0254,
    cm: 2.54,
    in: 1,
    ft: 0.08,
    mm: 25.4,
    yd: 0.03,
    km: 0.00003,
    mi: 0.000016,
  },
  ft: {
    m: 0.3048,
    cm: 30.48,
    in: 12,
    ft: 1,
    mm: 304.8,
    yd: 0.33,
    km: 0.0003,
    mi: 0.000189,
  },
  mm: {
    m: 0.001,
    cm: 0.1,
    in: 0.039,
    ft: 0.003,
    mm: 1,
    yd: 0.001,
    km: 0.000001,
    mi: 0.00000062,
  },
  yd: {
    m: 0.9144,
    cm: 91.44,
    in: 36,
    ft: 3,
    mm: 914.4,
    yd: 1,
    km: 0.0009,
    mi: 0.000568,
  },
  km: {
    m: 1000,
    cm: 100000,
    in: 39370,
    ft: 3281,
    mm: 1000000,
    yd: 1094,
    km: 1,
    mi: 0.62137,
  },
  mi: {
    m: 1609.34,
    cm: 160934,
    in: 63360,
    ft: 5280,
    mm: 1609344,
    yd: 1760,
    km: 1.60934,
    mi: 1,
  },
};
const data = JSON.stringify(dis);
console.log(data);
const distance = JSON.parse(data)

const inputSelect = document.getElementById("inputType");
const resultSelect = document.getElementById("resultType");

for (let unit in distance) {
  const option = document.createElement("option");
  option.text = unit;
  inputSelect.add(option);

  const resultOption = document.createElement("option");
  resultOption.text = unit;
  resultSelect.add(resultOption);
}

function convertDistance() {
  const inputValue = parseFloat(document.getElementById("input").value);
  const inputUnit = document.getElementById("inputType").value;
  const resultUnit = document.getElementById("resultType").value;

  const conversionFactor = distance[inputUnit][resultUnit];

  const resultValue = inputValue * conversionFactor;

  document.getElementById("result").value = resultValue.toFixed(2);

  console.log(
    JSON.stringify({
      inputUnit,
      resultUnit,
      resultValue: resultValue.toFixed(2),
    })
  );
}
