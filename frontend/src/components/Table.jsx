
const Table = ({expenses}) => {
  return (
    <div className="table">
      <table>
        <thead>
            <tr>

            </tr>
        </thead>
        <tbody>
            {
                expenses.map((expense) => (
                    <tr key={expense.id}>
                    
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
