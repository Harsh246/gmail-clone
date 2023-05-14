import React, { useEffect, useState } from "react";
import "./styles/EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  LocalOffer,
  MoreVert,
  Person,
  RefreshOutlined,
} from "@mui/icons-material";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";

import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

function EmailList() {
  const user = useSelector(selectUser);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // fetchEmails();

    try {
      const emailsCollection = collection(db, "emails");

      const emailsQuery = query(
        emailsCollection,
        where("to", "==", user.email),
        orderBy("time", "desc")
      );

      const fetchUpdatedQuery = () => {
        getDocs(emailsQuery)
          .then((querySnapshot) => {
            const emailList = [];
            querySnapshot.forEach((doc) => emailList.push(doc.data()));
            setEmails(emailList);
          })

          .catch((error) => {});
      };

      onSnapshot(emailsQuery, (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          fetchUpdatedQuery();
        });
      });
    } catch (err) {}
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox size="small" style={{ padding: 0 }} />
          <IconButton style={{ paddingLeft: 0 }} disableRipple>
            <ArrowDropDown fontSize="small" />
          </IconButton>
          <IconButton>
            <RefreshOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft fontSize="small" />
          </IconButton>
          <IconButton>
            <ChevronRight fontSize="small" />
          </IconButton>
          {/* <IconButton>
            <KeyboardHide fontSize="small" />
          </IconButton>
          <IconButton>
            <Settings fontSize="small" />
          </IconButton> */}
        </div>
      </div>{" "}
      <section className="emailList__section">
        <div className="emailList__sections">
          <Section title="Primary" Icon={Inbox} selected color="red" />
          <Section title="Social" Icon={Person} color="#1A73E8" />
          <Section title="Promotions" Icon={LocalOffer} color="green" />
        </div>
        <div className="emailList__container">
          {emails?.map((data) => (
            <EmailRow key={data?.time?.toDate().toISOString()} email={data} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default EmailList;
