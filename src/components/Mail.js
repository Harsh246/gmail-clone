import React from "react";
import "./Mail.css";
import { Avatar, Container, IconButton, Typography } from "@mui/material";
import {
  ArrowBackOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EmailOutlined,
  ErrorOutline,
  ExitToAppOutlined,
  LabelImportantOutlined,
  MoreVertOutlined,
  MoveToInboxOutlined,
  PrintOutlined,
  UnfoldMoreOutlined,
  LaunchOutlined,
  WatchLaterOutlined,
  ChevronLeft,
  ChevronRight,
  DriveFileMoveOutlined,
  ArrowDownward,
  ArrowDropDown,
  StarOutline,
  ReplyOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function Mail() {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <ErrorOutline fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <EmailOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <WatchLaterOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <CheckCircleOutlined fontSize="small" />
          </IconButton>{" "}
          <IconButton>
            <DriveFileMoveOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertOutlined fontSize="small" />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeft fontSize="small" />
          </IconButton>
          <IconButton>
            <ChevronRight fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Verify your email address</h2>

          <div className="mail__bodyHeaderTools">
            <IconButton>
              <PrintOutlined fontSize="small" />
            </IconButton>

            <IconButton>
              <LaunchOutlined fontSize="small" />
            </IconButton>
          </div>
        </div>

        <div className="mail__bodyContainer">
          <div className="mail__bodyAvatar">
            <Avatar sx={{ mx: "16px" }} />
          </div>
          <div className="mail__bodyContent">
            <div className="mail__bodyContentInfo">
              <div className="mail__bodyContentInfoLeft">
                <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                  Play.ht
                  <Typography
                    className="lg-font"
                    variant="caption"
                    sx={{ px: 0.5 }}
                  >
                    {"<noreply@play.ht>"}
                  </Typography>
                </Typography>
                <Container disableGutters sx={{ display: "flex" }}>
                  <Typography className="lg-font" variant="subtitle2">
                    to me
                  </Typography>
                  <ArrowDropDown fontSize="small" sx={{ cursor: "pointer" }} />
                </Container>
              </div>

              <div className="mail__bodyContentInfoRight">
                <Typography className="lg-font" variant="caption">
                  Sun, May 7, 1:00 AM (23 hours ago)
                </Typography>

                <IconButton>
                  <StarOutline fontSize="small" />
                </IconButton>
                <IconButton>
                  <ReplyOutlined fontSize="small" />
                </IconButton>
                <IconButton>
                  <MoreVertOutlined fontSize="small" />
                </IconButton>
              </div>
            </div>

            <div className="mail__message">Tesla is booming 🔥</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
