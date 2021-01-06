<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManualStatementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manual_statements', function (Blueprint $table) {
            $table->id();
            $table->string('refnumber');
            $table->string('name');
            $table->integer('amount');
            $table->integer('currency');
            $table->string('transaction_date');
            $table->string('status')->default('PENDING');
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
        Schema::dropIfExists('manual_statements');
    }
}
