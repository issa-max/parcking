<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تطبيق موقف السيارات</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
   
    <h1>تطبيق موقف السيارات</h1>
    <div>
        <p>عدد مواقف السيارات الفارغة: <span id="empty-spots">{{ $emptySpots }}</span></p>
        <p>عدد المواقف الممتلئة: <span id="filled-spots">{{ $filledSpots }}</span></p>
        <form method="POST" action="/tickets">
            @csrf
            <button type="submit">إصدار تذكرة</button>
        </form>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
