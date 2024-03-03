'use client'
import { Row, Col,Button, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useEffect , useState , useMemo } from "react";
import DataTable  from "react-data-table-component";
import styled from 'styled-components';
import { useAuthContext } from "../../../../context/AuthContextProvider";
import { useRouter } from "next/navigation";
import {
    getAuth
} from 'firebase/auth';
import firebase_app from '../../../../firebase/config';

const auth = getAuth(firebase_app);
const StudentListTable = () => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [columns, setColumns] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const { user , setUser } = useAuthContext();
    const router = useRouter();

    let rows ;
    let filteredItems;
     const orgId = 5;
    const timeout = setTimeout(() => {
        setColumns([{
          name: 'Name',
          selector: row => row.Name,
          sortable: true
        }, {
          name: 'Email',
          selector: row => row.Email,
          sortable: true
        }, {
          name: 'Address',
          selector: row => row.Address,
          sortable: true
        }]);
        // setPending(false);
      }, 100);

    useEffect( () =>   {
        async function fetchData() {
            // You can await here
           debugger;
            if (user == null) router.push("/");
           // const response = await fetch('http://127.0.0.1:5001/fingerprint-capture/us-central1/getAllStudents');
           const reponse =await fetch('https://getallstudents-rojufsalfa-uc.a.run.app');
            rows = await response.json();
            setLoading(false);
            setData(rows.students);
            // ...
             filteredItems = await rows.students.filter(item => item.Name && item.Name.toLowerCase().includes(filterText.toLowerCase()));
             console.log(filteredItems);
          }
         fetchData();
        }, [orgId]);
        const TextField = styled.input`
        height: 32px;
        width: 200px;
        border-radius: 3px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid #e5e5e5;
        padding: 0 32px 0 16px;
      
        &:hover {
          cursor: pointer;
        }
      `;
      
      const ClearButton = styled(Button)`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        height: 34px;
        width: 32px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      
      
      const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
          <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
          />
          <ClearButton type="button" onClick={onClear}>
            X
          </ClearButton>
        </>
      );
        const subHeaderComponentMemo = useMemo(() => {
          const handleClear = () => {
            if (filterText) {
              setResetPaginationToggle(!resetPaginationToggle);
              setFilterText('');
            }
          };
          return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
        }, [filterText, resetPaginationToggle]);
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Student List  */}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        {data && <DataTable title="Student List" columns={columns}  progressPending={isLoading}  data={data} pagination paginationResetDefaultPage={resetPaginationToggle} 
        subHeader subHeaderComponent={subHeaderComponentMemo} selectableRows persistTableHead />}
      </Col>
      <Col lg="12"> 
        Loggedin User :- {user?.email}
      </Col>
    </Row>
  );
};

export default StudentListTable;
