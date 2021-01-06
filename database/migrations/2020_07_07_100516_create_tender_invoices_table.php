<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenderInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tender_invoices', function (Blueprint $table) {
            $table->id();
            $table->integer('pnotice_id');
            $table->string('invoice_number');
            $table->integer('company_id');
            $table->integer('currency_id');
            $table->string('description');
            $table->string('year');
            $table->integer('cost');
            $table->string('status')->default('pending');
            $table->integer('user_id');
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
        Schema::dropIfExists('tender_invoices');
    }
}
