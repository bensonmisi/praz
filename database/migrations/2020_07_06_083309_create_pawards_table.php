<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePawardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pawards', function (Blueprint $table) {
            $table->id();
            $table->integer('pnotice_id');
            $table->integer('company_id');
            $table->text('description');
            $table->integer('currency_id');
            $table->integer('value');
            $table->integer('awarded_by');
            $table->string('status')->default('AWARDED');
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
        Schema::dropIfExists('pawards');
    }
}
