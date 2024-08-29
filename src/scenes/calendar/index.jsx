import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, ListItem, List, ListItemText, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected) => {
    const title = prompt("Please Enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title: title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEvenetClick = (selected) => {
    if (
      window.confirm(`Are you sure you want to delete ${selected.event.title} `)
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="FullCalendar Interactive page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((e) => (
              <ListItem
                key={e.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0px",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={
                    <Typography>
                      {formatDate(e.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEvenetClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2024-08-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2024-08-28",
              },
            ]}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
};

export default Calender;
