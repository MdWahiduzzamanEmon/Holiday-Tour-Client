import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import bg from '../../images/AOL-BG.png'
import BookInfo from './BookInfo';
import ticket from '../../images/pngegg.png'
const MyBooking = () => {
    const { user } = useAuth();
    const [allBookingInfo, setAllBookingInfo] = useState([]);
    React.useEffect(() => {
      axios
        .get(
          `https://fast-ocean-49814.herokuapp.com/bookingInfo/${user?.email}`
        )
        .then((res) => {
          setAllBookingInfo(res.data);
        });
    }, [user?.email]);
      
    //delete booking
    const handleDelete = (id) => {
        // const singleBooking = allBookingInfo.find(booking => booking._id === id);
        // console.log(singleBooking);
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this !",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete => {
            if (willDelete) {
                axios
                    .delete(
                        `https://fast-ocean-49814.herokuapp.com/bookingDelete/${id}`
                    )
                    .then((res) => {
                        if (res.data.deletedCount === 1) {
                            toast.success("Tour booking cancel successfully!");
                            const restBooking = allBookingInfo.filter(
                                (booking) => booking._id !== id
                            );
                            setAllBookingInfo(restBooking);
                        }
                    });
            } else {
                swal("Your ticket is safe!");
            }
        }))
        
    }
    return (
      <div style={{ backgroundImage: `url(${bg})` }} className=" my-5 pt-5">
        <section>
          <div className="container">
            <h4 className="text-start py-4">
              Booking Total: {allBookingInfo.length}
              <img src={ticket} alt="" className="ticket-width" />
            </h4>
            <div className=" my-4">
              {allBookingInfo.map((bookInfo) => (
                <BookInfo
                  key={bookInfo._id}
                  bookInfo={bookInfo}
                  handleDelete={() => handleDelete(bookInfo._id)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default MyBooking;