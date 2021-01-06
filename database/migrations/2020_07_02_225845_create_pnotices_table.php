<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePnoticesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pnotices', function (Blueprint $table) {
            $table->id();
            $table->integer('company_id');
            $table->integer('pclassification_id');
            $table->string('tendernumber');
            $table->text('description');
            $table->string('close_date');
            $table->integer('currency_id');
            $table->string('bidvalue');
            $table->string('bidbond');
            $table->string('file');
            $table->string('status')->default('PENDING');
            $table->integer('created_by');
            $table->integer('approved_by')->nullable();
            $table->text('comments')->nullable();
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
        Schema::dropIfExists('pnotices');
    }
}
