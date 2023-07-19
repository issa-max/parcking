<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $emptySpots = 10; // عدد مواقف السيارات الفارغة
        $filledSpots = 0; // عدد المواقف الممتلئة

        return view('index', compact('emptySpots', 'filledSpots'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public static function generateSequenceNumber()
{
    $count = Ticket::count();
    return $count + 1;
}

    public function store(Request $request)
    {
        // إنشاء تذكرة جديدة
    $ticket = new Ticket();
    $ticket->sequence_number = $this->generateSequenceNumber(); // قم بتنفيذ الطريقة الخاصة بإنشاء رقم التسلسلي
    $ticket->issue_time = now(); // قم بتعيين الوقت الحالي
    $ticket->save();

    // إرجاع رد بنجاح ورقم التسلسلي للتذكرة
    return response()->json([
        'message' => 'تم إصدار التذكرة بنجاح',
        'sequence_number' => $ticket->sequence_number,
    ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
