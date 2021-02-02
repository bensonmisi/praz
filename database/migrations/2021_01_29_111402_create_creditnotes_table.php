<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCreditnotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('creditnotes', function (Blueprint $table) {
            $table->id();
            $table->integer('banktransaction_id');
            $table->integer('company_id');
            $table->string('host_accountnumber');
            $table->integer('amount');
            $table->string('bank');
            $table->string('client_accountnumber');
            $table->string('file');
            $table->integer('administrator_id');
            $table->text('comments');
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
        Schema::dropIfExists('creditnotes');
    }
}
