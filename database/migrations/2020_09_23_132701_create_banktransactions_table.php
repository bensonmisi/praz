<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanktransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banktransactions', function (Blueprint $table) {
            $table->id();
            $table->string('regnumber');
            $table->string('name')->nullable();
            $table->string('bank');
            $table->string('trans_date');
            $table->string('reference_number');
            $table->string('source_reference_number');
            $table->string('accountnumber');
            $table->string('type');
            $table->integer('amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('banktransactions');
    }
}
