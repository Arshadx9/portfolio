// Experiments 3–5 from the cyber security lab manual (public/cyber/cybersecurity-lab-manual.pdf).

export type Block =
  | { h: string }
  | { p: string }
  | { list: string[] }
  | { code: string };

export type Experiment = {
  title: string;
  tools?: string;
  blocks: Block[];
};

export const labExperiments: Experiment[] = [
  {
    title: "Command Injection",
    tools: "DVWA, Burp Suite, custom vulnerable web application",
    blocks: [
      {
        p: "Command Injection vulnerabilities occur when a web application executes system commands with un-sanitized user input. This lab demonstrates how to exploit and understand these vulnerabilities using DVWA hosted on Metasploitable. Metasploitable is a purposely vulnerable virtual machine created for cybersecurity training. It behaves like a real server but contains many known security weaknesses, so students can practise in a safe, isolated environment instead of attacking real systems.",
      },
      {
        p: "This experiment teaches how a small coding mistake can allow a hacker to make a server perform unintended actions, and how secure coding practices prevent such attacks.",
      },
      { h: "Objective" },
      {
        list: [
          "Understand how Command Injection vulnerabilities work.",
          "Exploit the vulnerability to execute system commands.",
          "Analyse risks and discuss mitigation strategies.",
        ],
      },

      { h: "Part A — Set up Metasploitable" },
      { h: "Step 1: Download Metasploitable2-Linux.zip" },
      { p: "Open a web browser on your Windows system and go to:" },
      { code: "https://sourceforge.net/projects/metasploitable/" },
      { h: "Step 2: Extract the ZIP File" },
      {
        list: [
          "Right-click Metasploitable2-Linux.zip and select Extract All.",
          "After extraction you should have a folder containing files such as Metasploitable.vmdk and Metasploitable.vmx.",
        ],
      },
      { h: "Step 3: Import Metasploitable into VirtualBox" },
      {
        p: "In VirtualBox, click the New button at the top left. A window titled Create Virtual Machine will appear. Fill in:",
      },
      {
        list: [
          "Name: Metasploitable",
          "Folder: leave the default",
          "ISO Image: leave this field empty (do not select anything)",
          "Type: Linux",
          "OS Distribution: Linux 2.6",
          "Version: Ubuntu (32-bit) or Other Linux (32-bit)",
        ],
      },
      {
        p: "Next, click the small arrow next to Specify Virtual Hard Disk. Choose Use an existing Virtual hard disk file, then browse and select Metasploitable.vmdk from the folder you extracted.",
      },
      {
        p: "Click Finish. You should now see Metasploitable listed on the left side of VirtualBox along with Kali.",
      },

      { h: "Part B — Configure the network" },
      { p: "Configure the network so that Kali and Metasploitable can communicate." },
      { h: "Step 1: Configure Metasploitable Network" },
      {
        list: [
          "Select Metasploitable.",
          "Click Settings (gear icon).",
          "Click Network on the left.",
          "Under Adapter 1, set Attached to: Host-only Adapter.",
          "If you don't have a Host-only Adapter, choose Bridged Adapter for now (you can use the same adapter as Kali).",
        ],
      },
      { h: "Step 2: Configure Kali the Same Way" },
      { p: "Select Kali Linux → Settings → Network. Ensure Adapter 1 is set to the same network type as Metasploitable:" },
      {
        list: [
          "If Metasploitable uses Host-only Adapter, Kali should also use Host-only Adapter.",
          "If Metasploitable uses Bridged Adapter, Kali should also use Bridged Adapter.",
        ],
      },
      { h: "Step 3: Start Metasploitable" },
      {
        list: [
          "Select Metasploitable → click Start.",
          "Log in with username msfadmin and password msfadmin.",
          "After logging in, type:",
        ],
      },
      { code: "ifconfig" },
      {
        p: "Look for the IP address under eth0, for example 192.168.56.102 (the IP address will vary depending on your machine). Note this IP address.",
      },

      { h: "Part C — Exploit the vulnerability" },
      { h: "Step 1: Start Kali Linux" },
      { p: "Start your Kali Linux VM and log in." },
      { h: "Step 2: Test the Connection" },
      { p: "Open a terminal in Kali and type:" },
      { code: "ping 192.168.56.102" },
      { p: "If you receive replies, the connection is working." },
      { h: "Step 3: Open DVWA" },
      { p: "Open Firefox in Kali and enter in the address bar:" },
      { code: "http://192.168.56.102/dvwa" },
      { h: "Step 4: Login to DVWA" },
      { p: "Username: admin — Password: password" },
      { p: "If you see a Create/Reset Database button, click it first, then log in again." },
      { h: "Step 5: Set Security to Low" },
      { p: "From the left menu: DVWA Security → select Low → click Submit." },
      { h: "Step 6: Open Command Execution" },
      { p: "Click Command Execution in the left menu. You'll see a text box asking for an IP address." },
      { h: "Step 7: Test the Application" },
      { p: "Enter the following and click Submit. You should see the ping output." },
      { code: "127.0.0.1" },
      { h: "Step 8: Try Safe Command Execution Examples" },
      { p: "One at a time, enter the following and click Submit:" },
      { code: "127.0.0.1; ls" },
      { p: "Expected output: a list of files and directories in the current folder. Try the following commands:" },
      { code: "127.0.0.1; pwd" },
      {
        code: String.raw`PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.280 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.298 ms
64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.214 ms

--- 127.0.0.1 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 1999ms
rtt min/avg/max/mdev = 0.214/0.264/0.298/0.036 ms
/var/www/dvwa/vulnerabilities/exec`,
      },
      { code: "127.0.0.1; whoami\n127.0.0.1; ls -la\n127.0.0.1; ifconfig" },
      {
        p: "These demonstrate how the application executes additional commands because it doesn't properly validate user input.",
      },
    ],
  },
  {
    title: "Buffer Overflow Illustration using GCC",
    tools: "GCC, Kali Linux / Ubuntu",
    blocks: [
      {
        p: "GCC (GNU Compiler Collection) is a free and open-source compiler used to convert source code written in languages such as C, C++, Java and Fortran into executable machine code.",
      },
      {
        p: "This experiment demonstrates the concept of a buffer overflow, one of the most common software security vulnerabilities, in a controlled laboratory environment. Students learn how exceeding the allocated memory for user input can cause a program to crash or behave unexpectedly, emphasizing the importance of secure coding and proper input validation. A real-world example is a login or banking application where improper handling of user input could lead to application failure or unauthorized access.",
      },
      { h: "Step 1: Open the Linux Terminal" },
      { p: "Start your Linux virtual machine (Kali Linux or Ubuntu) and open Terminal." },
      { h: "Step 2: Create the C Program" },
      { p: "Create a new file named buffer.c:" },
      { code: "nano buffer.c" },
      {
        code: String.raw`#include <stdio.h>
#include <string.h>

int main()
{
    char buff[15];
    int pass = 0;

    printf("\nEnter the password:\n");
    fgets(buff, sizeof(buff), stdin);
    buff[strcspn(buff, "\n")] = '\0'; // Remove newline

    if(strcmp(buff, "thegeekstuff"))
    {
        printf("\nWrong Password\n");
    }
    else
    {
        printf("\nCorrect Password\n");
        pass = 1;
    }

    if(pass)
    {
        printf("\nRoot privileges given to the user\n");
    }

    return 0;
}`,
      },
      { p: "Save the file: press Ctrl + O, press Enter, then Ctrl + X." },
      { h: "Step 3: Compile the Program" },
      { p: "Compile using GCC:" },
      { code: "gcc -g -fno-stack-protector -z execstack -o buffer buffer.c" },
      {
        list: [
          "-g → includes debugging symbols.",
          "-fno-stack-protector → disables stack protection.",
          "-z execstack → makes the stack executable (used only for demonstration).",
        ],
      },
      { h: "Step 4: Run the Program" },
      { code: "./buffer" },
      { h: "Run 1 (Correct Password)" },
      { p: "Enter:" },
      { code: "thegeekstuff" },
      { p: "Output:" },
      { code: "Enter the password:\nthegeekstuff\n\nCorrect Password\n\nRoot privileges given to the user" },
      { h: "Run 2 (Incorrect Password)" },
      { p: "Run ./buffer again and enter:" },
      { code: "hello" },
      { p: "Output:" },
      { code: "Wrong Password" },
      { p: "No root privileges are granted." },
      { h: "Run 3 (Attempt Buffer Overflow)" },
      { p: "Run ./buffer again and enter a long string, for example:" },
      { code: "Hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" },
      { p: "Depending on your compiler and system, one of the following may happen:" },
      {
        list: [
          "Program crashes (Segmentation Fault)",
          "Unexpected output",
          "Variable values change",
          "Program behaves abnormally",
        ],
      },
    ],
  },
  {
    title: "Compare It! Tool for Forensic Investigation",
    tools: "Windows, Notepad, Compare It!",
    blocks: [
      {
        p: "This experiment introduces the Compare It! tool, commonly used in digital forensic investigations to compare two versions of a file and identify any differences between them. The tool displays both files side by side and highlights added, deleted or modified content, making it easy to determine what changes have been made.",
      },
      {
        p: "Students create two text files with slight differences and use Compare It! to analyze them, navigate through the differences, synchronize changes if required, and generate a comparison report for documentation. Forensic analysts compare files recovered from a suspect's computer with the original files to determine whether evidence has been altered.",
      },
      { h: "Software Required" },
      { list: ["Windows Operating System", "Notepad", "Compare It! Tool"] },
      { h: "Step 1: Create the First Text File" },
      { list: ["Open Notepad.", "Type the following content:"] },
      {
        code: "Student Name: Rahul\nUSN: 1DS22CS001\nDepartment: CSE\nSemester: 7\nCollege: DSCE",
      },
      {
        list: [
          "Click File → Save As.",
          "Save the file as File1.txt. Choose an easy location such as the Desktop.",
        ],
      },
      { h: "Step 2: Create the Second Text File" },
      { list: ["Open Notepad again.", "Type slightly different content, for example:"] },
      {
        code: "Student Name: Rahul Kumar\nUSN: 1DS22CS001\nDepartment: Computer Science\nSemester: 7\nCollege: DSCE Bangalore",
      },
      { list: ["Save the file as File2.txt in the same folder as File1.txt."] },
      { h: "Step 3: Install Compare It!" },
      { p: "Download the Compare It! software from the official website:" },
      { code: "https://www.grigsoft.com/wincmp3.htm" },
      {
        list: [
          "Run the installer.",
          "Follow the installation wizard.",
          "Click Finish after installation.",
        ],
      },
      { h: "Step 4: Launch the Compare It! Tool" },
      {
        p: "Open Compare It! from the Start Menu or Desktop shortcut. The application window opens with two file selection panels.",
      },
      { h: "Step 5: Load the First File" },
      {
        list: [
          "Click the Browse/Open button on the left side.",
          "Navigate to the location where File1.txt is saved.",
          "Select File1.txt.",
          "Click Open.",
        ],
      },
      { h: "Step 6: Load the Second File" },
      {
        list: [
          "Click the Browse/Open button on the right side.",
          "Select File2.txt.",
          "Click Open.",
        ],
      },
      { h: "Step 7: Compare the Files" },
      {
        list: [
          "The software automatically compares both files.",
          "Both files are displayed side by side.",
          "The tool highlights differences using different colors.",
        ],
      },
      { p: "Typical color indications (exact colors may vary with the software theme and settings):" },
      { list: ["Yellow – Modified text", "Green – Newly added text", "Red – Deleted text"] },
      { h: "Step 8: Analyze the Differences" },
      { p: "Observe the highlighted differences, such as:" },
      {
        list: [
          "Changed student name",
          "Modified department name",
          "Additional words added to the college name",
        ],
      },
      { p: "These highlighted changes help investigators determine what information has been modified." },
      { h: "Step 9: Navigate Between Differences" },
      { p: "Use the toolbar buttons or keyboard shortcuts to:" },
      { list: ["Move to the next difference", "Move to the previous difference"] },
      { p: "This allows easy examination of every change between the two files." },
      { h: "Step 10: Synchronize or Copy Changes (Optional)" },
      {
        list: [
          "Select a highlighted difference.",
          "Click the Copy Left → Right or Copy Right → Left button.",
          "The selected change is copied to the other file.",
        ],
      },
      { p: "This feature is useful for synchronizing file contents." },
      { h: "Step 11: Generate a Difference Report" },
      {
        list: [
          "Click File → Print or Print Preview.",
          "The software generates a report showing all detected differences.",
          "Save or print the report for documentation.",
        ],
      },
      {
        p: "The report can serve as evidence during forensic investigations by recording the differences between the two files.",
      },
      { h: "Step 12: Close the Application" },
      {
        list: [
          "Review the comparison results.",
          "Save any required reports.",
          "Close the Compare It! application.",
        ],
      },
    ],
  },
];
