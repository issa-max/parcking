    // جزء البرمجة الخاص بالتفاعل والوظائف

        // عناصر الصفحة
        const emptySpotsElement = document.getElementById("empty-spots");
        const filledSpotsElement = document.getElementById("filled-spots");
        const ticketContainer = document.getElementById("ticket-container");

        // استعادة عدد المواقف الفارغة والممتلئة من التخزين المحلي
        let emptySpots = localStorage.getItem("emptySpots") || 100;
        let filledSpots = localStorage.getItem("filledSpots") || 0;

        // تحديث عدد المواقف الفارغة والممتلئة
        function updateSpotsCount() {
            emptySpotsElement.textContent = emptySpots;
            filledSpotsElement.textContent = filledSpots;
        }

        // دالة إصدار التذكرة
        function issueTicket() {
            if (emptySpots <= 0) {
                // إذا كانت جميع المواقف ممتلئة، فقم بعرض رسالة بدلاً من إصدار التذكرة
                alert("عذرًا، جميع المواقف ممتلئة!");
                return;
            }

            const sequenceNumber = filledSpots + 1; // التسلسل حسب عدد المواقف الممتلئة
            const date = new Date();

            // حفظ معلومات التذكرة في قاعدة البيانات أو قم بعملية طباعة هنا
            const ticket = `
                <div class="ticket">
                    <h3>تذكرة رقم ${sequenceNumber}</h3>
                    <p>الساعة: ${date.getHours()}:${date.getMinutes()}</p>
                    <p>التاريخ: ${date.toLocaleDateString()}</p>
                </div>
            `;
            printTicket(ticket);

            // إضافة التذكرة إلى عنصر سعة التذاكر
            ticketContainer.innerHTML = ticket;

            // تحديث العدادات
            emptySpots--;
            filledSpots++;
            updateSpotsCount();

            // حفظ عدد المواقف الفارغة والممتلئة في التخزين المحلي
            localStorage.setItem("emptySpots", emptySpots);
            localStorage.setItem("filledSpots", filledSpots);

        }
          // دالة زيادة المواقف الفارغة
          function increaseEmptySpots() {
            emptySpots++;
            updateSpotsCount();

            // حفظ عدد المواقف الفارغة في التخزين المحلي
            localStorage.setItem("emptySpots", emptySpots);
        }
        function printTicket(ticket) {
            const ticketElement = document.createElement("div");
    ticketElement.innerHTML = ticket;
    document.body.appendChild(ticketElement);
            // طباعة الصفحة
            window.print();
            document.body.removeChild(ticketElement);
        }
        // تحديث عدد المواقف الفارغة والممتلئة في البداية
        updateSpotsCount();
