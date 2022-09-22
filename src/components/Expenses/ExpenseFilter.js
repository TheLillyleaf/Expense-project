/** @format */
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const years = [2019, 2020, 2021, 2022];

  function onChangeYearHandler(event) {
    props.filterChange(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select
          value={props.selected}
          onChange={onChangeYearHandler}
        >
          {years.map((year) => {
            return (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
