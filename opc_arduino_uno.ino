
#include <Ethernet.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>

byte mac_addr[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};

// insert queries
char INSERT_DATA[] = "INSERT INTO someDB.Table (message, sensor_num, value) VALUES ('%s',%d,%s)";
char query[128];
char data[10];

IPAddress server_addr(0.0.0.0); // IP of the MySQL *server* here
char user[] = "some user";                   // MySQL user login username
char password[] = "secret";               // MySQL user login password

const int numAnalogs = 6; 
//const int numDigitialOut = sumnum;

EthernetClient client;
MySQL_Connection conn((Client *)&client);

void setup()
{
  // Trouble Shooting Serial
  Serial.begin(115200);

  while (!Serial)
    ; // wait for serial port to connect
  Ethernet.begin(mac_addr);
  Serial.println("Connecting...");
  if (conn.connect(server_addr, 236472, user, password))
  {
    delay(1000);
  }
  else
    Serial.println("Connection failed.");
}

void loop()
{
  if (conn.connected())
  {
    delay(500);

    //send anolog inputs over to MySql
    for (int i = 0; i < numAnalogs; i++)
    {
      //Serial.println(analogRead(i));
      //initiate the query class instance
      MySQL_Cursor *cur_mem = new MySQL_Cursor(&conn);
      //save
      dtostrf(analogRead(i), 1, 1, data);
      sprintf(query, INSERT_DATA, "pin", i, data);
      // execute query
      cur_mem->execute(query);
      // delete cursor to free memory
      delete cur_mem;
    }
  }
  else
  {
    conn.close();
    Serial.println("Attempting reconnecting...");
    if (conn.connect(server_addr, 3306, user, password))
    {
      delay(500);
      Serial.println("Successfull reconnect!");
    }
    else
    {
      Serial.println("Reconnection failed");
    }
  }
}
